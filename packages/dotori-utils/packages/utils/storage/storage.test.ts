import { Response } from 'node-fetch';

import { cacheStorages, localStorages, sessionStorages } from '@/utils';

describe('localStorage util test', () => {
  it('should return null when no value is set in localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should store and retrieve a value(boolean) in localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    darkModeStorage.set(false);
    expect(darkModeStorage.get()).toBe(false);

    darkModeStorage.set(true);
    expect(darkModeStorage.get()).toBe(true);

    darkModeStorage.remove();
  });

  it('should remove the value from localStorage', () => {
    const darkModeStorage = localStorages<boolean>('darkMode');

    darkModeStorage.set(true);
    darkModeStorage.remove();
    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });
});

describe('sessionStorage util test', () => {
  it('should return null when no value is set in sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should store and retrieve a value(boolean) in sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(false);
    expect(darkModeStorage.get()).toBe(false);

    darkModeStorage.set(true);
    expect(darkModeStorage.get()).toBe(true);

    darkModeStorage.remove();
  });

  it('should remove the value from sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(true);
    darkModeStorage.remove();
    expect(darkModeStorage.get()).toBe(null);

    darkModeStorage.remove();
  });

  it('should remove when closed session from sessionStorage', () => {
    const darkModeStorage = sessionStorages<boolean>('darkMode');

    darkModeStorage.set(true);

    window.sessionStorage.clear();

    expect(darkModeStorage.get()).toBe(null);
  });
});

describe('cacheStorage util test', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return null when no value is set in cacheStorage', async () => {
    const mockStorage = cacheStorages<boolean>('http://localhost', 'mockData', 60);

    (caches.match as jest.Mock).mockResolvedValueOnce(null);

    const mockData = await mockStorage.get();
    expect(mockData).toBe(null);

    await mockStorage.remove();
  });

  it('should store and retrieve a value(boolean) in cacheStorage', async () => {
    const mockStorage = cacheStorages<boolean>('http://localhost', 'mockData', 60);

    const firstMockCache = new Response(JSON.stringify({ value: false, expirationTime: Date.now() + 60 }));
    await mockStorage.set(false);

    (caches.open as jest.Mock).mockResolvedValueOnce({
      put: jest.fn().mockResolvedValueOnce(false),
      match: jest.fn().mockResolvedValueOnce(firstMockCache),
    });

    const mockData1 = await mockStorage.get();
    expect(mockData1).toBe(firstMockCache);

    const secondMockCache = new Response(JSON.stringify({ value: false, expirationTime: Date.now() + 60 }));
    await mockStorage.set(true);

    (caches.open as jest.Mock).mockResolvedValueOnce({
      put: jest.fn().mockResolvedValueOnce(true),
      match: jest.fn().mockResolvedValueOnce(secondMockCache),
    });
    const mockData2 = await mockStorage.get();
    expect(mockData2).toBe(secondMockCache);

    await mockStorage.remove();
  });

  it('should remove the value from cacheStorage', async () => {
    const mockStorage = cacheStorages<boolean>('http://localhost', 'mockData', 60);

    (caches.open as jest.Mock).mockResolvedValueOnce({
      put: jest.fn().mockResolvedValueOnce(true),
      match: jest
        .fn()
        .mockResolvedValueOnce(new Response(JSON.stringify({ value: true, expirationTime: Date.now() + 60 }))),
    });

    await mockStorage.set(true);
    await mockStorage.remove();

    (caches.open as jest.Mock).mockResolvedValueOnce({
      put: jest.fn().mockResolvedValueOnce(null),
      match: jest.fn().mockResolvedValueOnce(null),
    });

    const mockData1 = await mockStorage.get();
    expect(mockData1).toBe(null);

    await mockStorage.remove();
  });
});
