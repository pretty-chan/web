import { style } from '@vanilla-extract/css';

export const emoji = style({
  fontSize: 32,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'transform 0.2s',
  ':hover': {
    transform: 'scale(1.2)',
  },
})