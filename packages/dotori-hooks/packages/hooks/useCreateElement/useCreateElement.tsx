import { useEffect } from 'react';

import { hasElement } from 'dotori-utils';

const useCreateElement = <T extends keyof HTMLElementTagNameMap>(
  createElements: UseCreateElementProps<T> | UseCreateElementProps<T>[],
) => {
  useEffect(() => {
    if (Array.isArray(createElements)) createElements.forEach(createElement);
    else createElement(createElements);
  }, [createElements]);
};

type HTMLElementProperties<T extends HTMLElement> = {
  [K in keyof T]: T[K];
};

interface UseCreateElementProps<T extends keyof HTMLElementTagNameMap> {
  tagName: T;
  attributes: Partial<HTMLElementProperties<HTMLElementTagNameMap[T]>>;
  options?: { target?: HTMLElement };
}

const createElement = <T extends keyof HTMLElementTagNameMap>({
  tagName,
  attributes,
  options,
}: UseCreateElementProps<T>) => {
  if (hasElement(tagName, attributes)) return;

  const element = document.createElement(tagName);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value as string);
  });

  if (options?.target) options.target.appendChild(element);
  else document.body.appendChild(element);
};

export default useCreateElement;
