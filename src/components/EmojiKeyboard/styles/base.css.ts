import { style } from '@vanilla-extract/css';

export const base = style({
  position: 'fixed',
  width: '100%',
  height: 'calc(100% - 88px)',
  padding: 16,
  background: '#f8f8f8',
  bottom: '-100%',
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: 8,
  overflowX: 'auto',
})

export const focusing = style({
  bottom: 0,
})