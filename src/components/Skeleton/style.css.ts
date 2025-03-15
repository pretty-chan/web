import { keyframes, style } from '@vanilla-extract/css';

const skeletonGradient = keyframes({
  '0%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
  '50%': { backgroundColor: 'rgba(165, 165, 165, 0.3)' },
  '100%': { backgroundColor: 'rgba(165, 165, 165, 0.1)' },
});

export const base = style({
  width: '100%',
  height: '30px',
  backgroundColor: '#f2f2f2',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '4px',
  animation: `${skeletonGradient} 1.5s infinite ease-in-out`,
});
