import { flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  ...flexCenter(),
});

export const base = style({
  width: '100%',
  ...flexColumn({
    align: 'center',
    gap: 24,
  }),
  maxWidth: 600,
});

export const buttons = style({
  ...flexCenter({
    gap: 8,
  }),
});
