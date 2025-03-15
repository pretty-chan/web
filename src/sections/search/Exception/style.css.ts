import { flexColumn } from '@/lib/utils/styles/flex';
import { style } from '@vanilla-extract/css';

export const base = style({
  width: '100%',
  padding: '36px 0px',
  ...flexColumn({
    align: 'center',
    gap: 12,
  }),
});
