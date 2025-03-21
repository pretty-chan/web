import { resetGlobalStyle } from '@/lib/utils/styles/layer';
import '@/styles/layer.css';

resetGlobalStyle('html, body', {
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  scrollBehavior: 'smooth',
});

resetGlobalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  letterSpacing: 4,
});

resetGlobalStyle('*:focus', {
  outline: 'none',
});

resetGlobalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
});

resetGlobalStyle('input, textarea, button', {
  fontFamily: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

resetGlobalStyle('::-webkit-scrollbar', {
  display: 'none',
});
