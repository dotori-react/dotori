import { useEffect } from 'react';

import { hasElement } from 'dotori-utils';

const useCreateElement = <T extends keyof HTMLElementTagNameMap>(createElements: UseCreateElementProps<T>[]) => {
  useEffect(() => {
    const elements: HTMLElementTagNameMap[T][] = [];

    createElements.forEach(({ tagName, attributes, options }) => {
      if (hasElement(tagName, attributes)) return;

      const element = document.createElement(tagName);
      elements.push(element);

      if (attributes) {
        // eslint-disable-next-line guard-for-in, no-restricted-syntax
        for (const key in attributes) {
          element[key] = attributes[key] as HTMLElementTagNameMap[T][Extract<keyof HTMLElementTagNameMap[T], string>];
        }
      }

      if (options?.target) options.target.appendChild(element);
      else document.body.appendChild(element);
    });
  }, [createElements]);
};

type HTMLElementProperties<T extends HTMLElement> = {
  [K in keyof T]?: T[K];
};

interface UseCreateElementProps<T extends keyof HTMLElementTagNameMap> {
  tagName: T;
  attributes: Partial<HTMLElementProperties<HTMLElementTagNameMap[T]>>;
  options?: { target?: HTMLElement };
}

export default useCreateElement;
