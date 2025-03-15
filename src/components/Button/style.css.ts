import { style } from '@vanilla-extract/css';

export const base = style({
  padding: '10px 16px',
  background: '#000',
  outline: 'none',
  border: 'none',
  borderRadius: '9999px',
  cursor: 'pointer',
  transition: 'background 0.2s, transform 0.2s',
  ':hover': {
    background: '#333',
  },
  ':active': {
    transform: 'scale(0.97)',
  },
});
