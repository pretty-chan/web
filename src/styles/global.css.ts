import { globalStyle } from '@vanilla-extract/css';
import './reset.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
});
