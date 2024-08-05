Object.defineProperty(global, 'caches', {
  value: {
    delete: jest.fn().mockResolvedValue(true),
    has: jest.fn().mockResolvedValue(true),
    keys: jest.fn().mockResolvedValue(['my-cache']),
    match: jest.fn(),
    open: jest.fn().mockResolvedValue({
      put: jest.fn(),
      match: jest.fn(),
      add: jest.fn().mockResolvedValue(null),
      addAll: jest.fn().mockResolvedValue(null),
      delete: jest.fn().mockResolvedValue(null),
      keys: jest.fn().mockResolvedValue([]),
    }),
  },
  writable: true,
});
