import Typography from '../Typography';
import * as s from './style.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;

  return (
    <button {...rest} className={s.base}>
      <Typography color={'#fff'}>{children}</Typography>
    </button>
  );
}
