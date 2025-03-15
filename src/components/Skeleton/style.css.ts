import { keyframes, style } from '@vanilla-extract/css';

const skeletonGradient = keyframes({
  '0%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
  '50%': { backgroundColor: 'rgba(165, 165, 165, 0.3)' },
  '100%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
});

export const base = style({
  backgroundColor: '#f2f2f2',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 12,
  animation: `${skeletonGradient} 1.5s infinite ease-in-out`,
});
