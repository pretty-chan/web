'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';

import Typography from '@/components/Typography';
import { emojiToCode } from '@/lib/utils/emoji';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as s from './page.css';

export default function Home() {
  const [searchValue, setSearchValue] = useState<string>('');

  const router = useRouter();

  const onSubmit = () => {
    if (!searchValue) {
      return;
    }

    router.push(`/search/${emojiToCode(searchValue)}`);
  };

  const onClickLucky = () => {
    router.push(`/search/${emojiToCode('🐒')}`);
  }

  return (
    <div className={s.container}>
      <div className={s.base}>
        <Typography weight={600} size={36}>
          🔍
        </Typography>
        <Input
          placeholder={'💭🧠'}
          value={searchValue}
          onChange={setSearchValue}
          onSubmit={onSubmit}
        />
        <div className={s.buttons}>
          <Button onClick={onSubmit}>🔍</Button>
          <Button onClick={onClickLucky}>😃🤞</Button>
        </div>
      </div>
    </div>
  );
}
