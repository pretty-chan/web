'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';

import Typography from '@/components/Typography';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as s from './page.css';

export default function Home() {
  const [randomNumber, setRandomNumber] = useState<number>();
  const [searchValue, setSearchValue] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 9999));
  }, []);

  const onSubmit = () => {
    if (!searchValue) {
      return;
    }
    router.push(`/search/${searchValue}`);
  };

  return (
    <div className={s.container}>
      <div className={s.base}>
        <Typography weight={600} size={36}>
          Search Any Numbers
        </Typography>
        <Input
          placeholder={randomNumber ? `What about ${randomNumber}?` : ''}
          value={searchValue}
          onChange={(event) => {
            const value = event.target.value;

            if (!isNaN(Number(value))) {
              setSearchValue(value);
            }
          }}
          onSubmit={onSubmit}
        />
        <div className={s.buttons}>
          <Button onClick={onSubmit}>Search</Button>
          <Button>{"I'm feeling lucky"}</Button>
        </div>
      </div>
    </div>
  );
}
