import Button from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import Typography from '@/components/Typography';
import { codeToEmoji } from '@/lib/utils/emoji';
import { use } from 'react';
import * as s from './page.css';

export default function Search({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

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
      </div>
    </div>
  );
}
