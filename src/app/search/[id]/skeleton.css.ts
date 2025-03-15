import { flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: 16,
  ...flexCenter({
    gap: 12,
  }),
});

export const content = style({
  ...flexColumn({
    gap: 8,
  }),
});

export const row = style({
  ...flexColumn({
    gap: 4,
  }),
});
