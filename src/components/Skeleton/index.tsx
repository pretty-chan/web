import * as s from './style.css';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
}

export default function Skeleton(props: SkeletonProps) {
  const { width = '100%', height = 14 } = props;

  return (
    <div
      className={s.base}
      style={{
        width,
        height,
      }}
    />
  );
}
