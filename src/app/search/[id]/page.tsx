import Button from '@/components/Button';
import LinkButton from '@/components/LinkButton';
import Typography from '@/components/Typography';
import * as s from './page.css';

export default function Search() {
  return (
    <div className={s.container}>
      <div className={s.base}>
        <LinkButton href={'/'}>Go Back</LinkButton>
        <header className={s.header}>
          <div className={s.title}>
            <Typography weight={600} size={24}>
              {`Search result about "${730}"`}
            </Typography>
            <Typography weight={500} size={16} color={'#979797'}>
              Loading results...
            </Typography>
          </div>
          <Button>Search Again</Button>
        </header>
      </div>
    </div>
  );
}
