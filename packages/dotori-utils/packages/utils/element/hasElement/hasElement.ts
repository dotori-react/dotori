export const hasElement = <T extends keyof HTMLElementTagNameMap>(
  tagName: T,
  attributes?: HTMLElementProperties<HTMLElementTagNameMap[T]>,
) =>
  [...document.getElementsByTagName(tagName)].some(el =>
    Object.entries(attributes ?? {}).some(
      ([key, value]) => el[key as Extract<keyof HTMLElementTagNameMap[T], string>] === value,
    ),
  );

type HTMLElementProperties<T extends HTMLElement> = {
  [K in keyof T]?: T[K];
};
