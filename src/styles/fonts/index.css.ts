import { globalFontFace } from '@vanilla-extract/css';
import { weight } from './values/weight';

export const fontFamily = 'WantedSans';

globalFontFace(
  fontFamily,
  Object.entries(weight).map(([name, weight]) => ({
    src: `url(/assets/fonts/${fontFamily}-${capitalizeFirstLetter(
      name,
    )}.woff2) format('woff2')`,
    fontWeight: weight,
    fontDisplay: 'block',
  })),
);

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
