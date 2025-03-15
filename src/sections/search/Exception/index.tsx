import LinkButton from '@/components/LinkButton';
import Typography from '@/components/Typography';
import { usePathname } from 'next/navigation';
import * as s from './style.css';

interface SearchExceptionSectionProps {
  type: 'no-results' | 'error';
}

export default function SearchExceptionSection(
  props: SearchExceptionSectionProps,
) {
  const { type } = props;

  const isError = type === 'error';

  const currentPath = usePathname();

  return (
    <div className={s.base}>
      <Typography size={36} weight={700}>
        {isError ? 'Oh no :(' : 'No Result :('}
      </Typography>
      <Typography weight={500}>
        {isError
          ? 'Unexpected error occurred. Please try again later.'
          : 'Please try another emoji.'}
      </Typography>
      <LinkButton href={currentPath}>🚶👈</LinkButton>
    </div>
  );
}
