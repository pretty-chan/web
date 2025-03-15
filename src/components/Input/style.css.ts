import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  height: 56,
  padding: '16px 24px',
  border: 'none',
  outline: 'none',
  background: '#f2f2f2',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'background 0.2s',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  ':hover': {
    background: '#e5e5e5',
    cursor: 'text',
  },
});

export const placeholder = style({
  opacity: 0.5,
})

export const focusing = style({
  position: 'fixed',
  width: `calc(100% - 32px)`,
  top: 16,
  left: 16,
})
