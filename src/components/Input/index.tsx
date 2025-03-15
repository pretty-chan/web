'use client';

import * as s from './style.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSubmit?: () => void;
}

export default function Input(props: InputProps) {
  const { onSubmit, ...rest } = props;

  return (
    <input
      className={s.base}
      {...rest}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onSubmit) {
          onSubmit();
        }
      }}
    />
  );
}
