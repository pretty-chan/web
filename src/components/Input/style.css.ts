import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: '16px 24px',
  borderRadius: '9999px',
  border: 'none',
  outline: 'none',
  background: '#f2f2f2',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'background 0.2s, transform 0.2s',
  ':hover': {
    background: '#e5e5e5',
  },
  ':active': {
    transform: 'scale(0.97)',
  },
});
