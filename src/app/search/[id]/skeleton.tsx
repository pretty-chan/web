import Skeleton from '@/components/Skeleton';

import * as s from './skeleton.css';

export default function SearchSkeleton() {
  return (
    <div className={s.base}>
      <Skeleton width={84} height={84} />
      <div className={s.content}>
        <Skeleton width={175} height={24} />
        <div className={s.row}>
          <Skeleton width={387} height={14} />
          <Skeleton width={233} height={14} />
        </div>
      </div>
    </div>
  );
}
