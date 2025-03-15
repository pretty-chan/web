'use client';

import { CSSProperties } from 'react';
import * as s from './style.css';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
}

export default function Skeleton({
  width = '100%',
  height = 14,
}: SkeletonProps) {
  return <div className={s.base} style={{ width, height } as CSSProperties} />;
}
