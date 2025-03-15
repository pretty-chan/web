export const emojiToCode = (emoji: string): string => {
  const hexCode = Array.from(emoji)
    .map((char) => char.codePointAt(0)?.toString(16).toUpperCase())
    .join('-');

  return btoa(encodeURIComponent(hexCode))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
};

export const codeToEmoji = (unicode: string): string => {
  let base64 = unicode.replace(/-/g, '+').replace(/_/g, '/');

  while (base64.length % 4 !== 0) {
    base64 += '=';
  }

  const hexString = decodeURIComponent(atob(base64));

  return hexString
    .split('-')
    .map((hex) => String.fromCodePoint(parseInt(hex, 16)))
    .join('');
};
