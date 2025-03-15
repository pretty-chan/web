import { globalStyle } from '@vanilla-extract/css';
import './fonts/index.css';
import { fontFamily } from './fonts/index.css';
import './reset.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: fontFamily,
  color: '#000',
  lineHeight: 'normal',
  fontWeight: 400,
  letterSpacing: 'normal',
});
