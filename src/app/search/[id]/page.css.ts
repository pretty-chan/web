import { flexBetween, flexCenter, flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  ...flexCenter({
    align: 'flex-start',
  }),
});

export const base = style({
  paddingTop: 64,
  width: '100%',
  maxWidth: 600,
  ...flexColumn({
    align: 'flex-start',
    gap: 24,
  }),
});

export const header = style({
  width: '100%',
  ...flexBetween({
    align: 'flex-start',
  }),
});

export const title = style({
  ...flexColumn({
    align: 'flex-start',
    gap: 6,
  }),
});
