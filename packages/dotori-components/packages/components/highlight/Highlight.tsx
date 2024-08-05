import { escapeRegex } from 'dotori-utils';

import Mark from './Mark';

const Highlight = ({ highlight, highlightStyle, children, ignoreCase = false }: HighlightProps) => (
  <div>
    {highlighter(children, highlight, ignoreCase).map(({ chunk, highlighted }, index) =>
      highlighted ? (
        <Mark key={index} className={highlightStyle}>
          {chunk}
        </Mark>
      ) : (
        <span key={index}>{chunk}</span>
      ),
    )}
  </div>
);

interface HighlightProps {
  highlight: string | string[];
  highlightStyle?: string;
  children: string;
  ignoreCase?: boolean;
}

const highlighter = (value: string, _highlight: string | string[], ignoreCase: boolean) => {
  if (_highlight == null) return [{ chunk: value, highlighted: false }];

  const highlight = Array.isArray(_highlight)
    ? _highlight
        .map(part => escapeRegex(part).trim())
        .filter(part => part.length > 0)
        .sort((a, b) => b.length - a.length) // 중복된 글자의 경우 길이가 텍스트가 우선이다.
    : escapeRegex(_highlight).trim();

  const shouldHighlight = Array.isArray(highlight) ? highlight.length > 0 : highlight.trim() !== '';

  if (!shouldHighlight) return [{ chunk: value, highlighted: false }];

  const matcher = `(${Array.isArray(highlight) ? highlight.join('|') : highlight})`;
  const flags = `g${ignoreCase ? 'i' : ''}`;

  const re = new RegExp(matcher, flags); // 그룹화하면 match되는 글자도 배열에 포함된다.
  const chunks = value
    .split(re)
    .filter(part => part !== '')
    .map(part => ({ chunk: part, highlighted: re.test(part) }));

  return chunks;
};

export default Highlight;
