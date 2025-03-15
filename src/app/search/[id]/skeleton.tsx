import Skeleton from '@/components/Skeleton';

import * as s from './skeleton.css';

interface SearchSkeletonProps {
  order: number;
}

export default function SearchSkeleton(props: SearchSkeletonProps) {
  const { order } = props;

  return (
    <div className={s.base}>
      <Skeleton width={84} height={84} order={order} />
      <div className={s.content}>
        <Skeleton width={175} height={24} order={order} />
        <div className={s.row}>
          <Skeleton width={387} height={14} order={order} />
          <Skeleton width={233} height={14} order={order} />
        </div>
      </div>
    </div>
  );
}
