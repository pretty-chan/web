'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import LinkButton from '@/components/LinkButton';
import Typography from '@/components/Typography';
import { codeToEmoji } from '@/lib/utils/emoji';
import SearchExceptionSection from '@/sections/search/Exception';
import { use, useEffect, useState } from 'react';
import * as s from './page.css';
import SearchSkeleton from './skeleton';
import ContentItem, { Content } from '@/components/ContentItem';

export default function Search({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search/${id}`);
        res.body?.pipeThrough(new TextDecoderStream()).pipeTo(new WritableStream({
          write(chunk) {
            setData(prev => [...prev, JSON.parse(chunk)]);
            console.log('🔍📦', JSON.parse(chunk));
          },
          close() {
            console.log('🔍📦', 'Stream closed');
            setIsLoading(false);
          },
        }));
      } catch (e) {
        console.error(e);
        setIsError(true);
        alert('🚨🔍');
      }
    }

    fetchData();
  }, [id])

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
        {isError ? <SearchExceptionSection type={'error'} /> : null}
        {!isLoading && data.length <= 0 ? <SearchExceptionSection type={'no-results'} /> : null}
        <div className={s.list}>
          {data.map((c, i) => <ContentItem key={i} content={c} />)}
          {Array.from({ length: isLoading ? data.length > 0 ? 1 : 6 : 0 }).map((_, index) => (
            <SearchSkeleton key={index} order={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
