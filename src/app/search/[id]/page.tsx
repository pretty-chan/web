'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import LinkButton from '@/components/LinkButton';
import Typography from '@/components/Typography';
import { codeToEmoji } from '@/lib/utils/emoji';
import SearchExceptionSection from '@/sections/search/Exception';
import { use, useState } from 'react';
import * as s from './page.css';
import SearchSkeleton from './skeleton';

export default function Search({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const [isError, setIsError] = useState(true);
  const [data, setData] = useState<string[]>([]);

  return (
    <div className={s.container}>
      <div className={s.base}>
        <LinkButton href={'/'}>🚶👈</LinkButton>
        <header className={s.header}>
          <div className={s.title}>
            <Typography weight={600} size={24}>
              {`🔍🏛️ "${codeToEmoji(id)}"`}
            </Typography>
            <Typography weight={500} size={16} color={'#979797'}>
              📚🧐
            </Typography>
          </div>
          <Button>🔍🔄</Button>
        </header>
        <Input placeholder={'💭🧠'} value={codeToEmoji(id)} />
        {isError && <SearchExceptionSection type={'error'} />}
        {data || <SearchExceptionSection type={'no-results'} />}
        <div className={s.list}>
          {Array.from({ length: 4 }).map((_, index) => (
            <SearchSkeleton key={index} order={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
