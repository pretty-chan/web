import Link from 'next/link';
import Typography from '../Typography';
import * as s from './style.css';

interface LinkButtonProps {
  href: string;
  children: string;
}

export default function LinkButton(props: LinkButtonProps) {
  const { href, children } = props;

  return (
    <Link href={href}>
      <Typography weight={500} color={'#979797'} className={s.label}>
        {children}
      </Typography>
    </Link>
  );
}
