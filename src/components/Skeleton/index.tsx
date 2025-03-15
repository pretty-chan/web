'use client';

import { CSSProperties } from 'react';
import * as s from './style.css';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  order?: number;
}

export default function Skeleton({
  width = '100%',
  height = 14,
  order = 0,
}: SkeletonProps) {
  return (
    <div
      className={s.base}
      style={
        { width, height, animationDelay: `${order * 0.2}s` } as CSSProperties
      }
    />
  );
}
