# Highlight Component

The `Highlight` component is used to highlight specific parts of a string based on a given search term or terms. It allows you to style the highlighted portions of the text and supports case-insensitive matching.

## Features

- **Highlighting**: The component highlights specific substrings within the provided `children` text. The highlighted portions are wrapped in a custom `Mark` component.
- **Multiple Highlights**: You can highlight multiple different terms by passing an array of strings.
- **Case Insensitivity**: Optionally ignore case when matching the highlight term.
- **Custom Highlight Style**: You can pass custom styles or class names to be applied to the highlighted text.

## Props

### HighlightProps

- **highlight**: A string or array of strings to highlight within the `children` text.
- **highlightStyle**: An optional string representing custom styles or class names to be applied to the highlighted text.
- **children**: The text content where the highlighting will occur.
- **ignoreCase**: A boolean to determine if the highlight should be case-insensitive. Default is `false`.

### Example

```typescript
// Example 1: Single term highlight
const SingleHighlightExample = () => (
  <Highlight highlight="React">Learning React is fun!</Highlight>
);

// Example 2: Multiple term highlight
const MultiHighlightExample = () => (
  <Highlight highlight={['React', 'fun']}>Learning React is fun!</Highlight>
);

// Example 3: Case-insensitive highlight
const CaseInsensitiveExample = () => (
  <Highlight highlight="react" ignoreCase>
    Learning React is fun!
  </Highlight>
);

// Example 4: Custom highlight style
const CustomHighlightExample = () => (
  <Highlight highlight="React" highlightStyle="highlighted-text">
    Learning React is fun!
  </Highlight>
);
```

## How It Works

- The `Highlight` component breaks the `children` text into chunks based on the provided `highlight` terms.
- Each chunk is either wrapped in a `Mark` component if it matches the highlight term or left as a normal `span` if it doesn't.
- The `highlighter` function handles the logic of matching and splitting the text based on the highlight terms, using regular expressions to ensure accurate matching.

### Highlighter Function

The highlighter function takes in the following parameters:

- **value**: The full text to be searched.
- **\_highlight**: A string or array of strings to be highlighted.
- **ignoreCase**: A boolean to determine if the match should be case-insensitive.
  The function escapes special characters in the highlight terms using escapeRegex, builds a regular expression, and splits the text into chunks. Each chunk is either marked as highlighted or not.

### Mark Component

The `Mark` component is used to wrap the highlighted text. It applies the custom `highlightStyle` to the highlighted portions of the text.

## Default Behavior

- **No Highlight**: If no `highlight` is provided or if the highlight terms are empty, the entire `children` text is rendered without any modifications.
- **Case-Sensitive by Default**: The highlight matching is case-sensitive unless the `ignoreCase` prop is set to `true`.
- **Custom Styles**: If no `highlightStyle` is provided, the highlighted text is wrapped in a default `Mark` component.

## Notes

- The `escapeRegex` function is used to escape special characters in the highlight terms, ensuring that the regular expression works correctly for all input.
- The component handles multiple highlight terms by sorting them based on length, ensuring that longer matches take precedence in case of overlaps.
- The regular expression is dynamically built to allow flexible matching of single or multiple terms.
