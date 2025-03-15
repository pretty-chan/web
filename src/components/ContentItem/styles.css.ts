import { style } from '@vanilla-extract/css';

export const link = style({
  width: '100%',
  display: 'block',
  textDecoration: 'none',
})

export const base = style({
  display: 'flex',
  padding: 16,
  gap: 16,
  alignItems: 'center',
  borderBottom: '1px solid #E5E5E5',
  cursor: 'pointer',
})

export const image = style({
  width: 84,
  height: 84,
  flexShrink: 0,
  borderRadius: 12,
  objectFit: 'cover',
})

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const snippet = style({
  opacity: 0.5,
})
