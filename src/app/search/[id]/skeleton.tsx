import Skeleton from '@/components/Skeleton';

import * as s from './skeleton.css';

export default function SearchSkeleton() {
  return (
    <div className={s.base}>
      <Skeleton width={84} aspectRatio={1 / 1} />
    </div>
  );
}
