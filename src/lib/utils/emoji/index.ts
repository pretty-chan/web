export const emojiToCode = (emoji: string): string => {
  return Array.from(emoji)
    .map((char) => char.codePointAt(0)?.toString(16).toUpperCase())
    .join('-');
};

export const codeToEmoji = (unicode: string): string => {
  return unicode
    .split('-')
    .map((hex) => String.fromCodePoint(parseInt(hex, 16)))
    .join('');
};
