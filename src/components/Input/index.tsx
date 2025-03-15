'use client';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import EmojiKeyboard from '../EmojiKeyboard';
import * as s from './style.css';

interface InputProps {
  placeholder?: string;
  value?: string;
  onSubmit?: () => void;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps) {
  const { placeholder, value, onSubmit, onChange } = props;
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (!isFocused) return ;

      if (e.key === 'Backspace') {
        onChange?.(value?.slice(0, -2) || '');
      }
    }

    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('keydown', onKeydown);
    }
  }, [isFocused, onChange, value])

  return (
    <>
      <motion.div
        layout
        className={cn(s.base, { [s.focusing]: isFocused })}
        style={{ borderRadius: 999 }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && onSubmit) {
            onSubmit();
          }
        }}
        onClick={() => setIsFocused((prev) => !prev)}>
        {value || (
          <motion.span layout className={s.placeholder}>
            {placeholder}
          </motion.span>
        )}
      </motion.div>
      <EmojiKeyboard
        show={isFocused}
        onEmojiSelect={(emoji) => onChange?.(value + emoji)}
      />
    </>
  );
}
