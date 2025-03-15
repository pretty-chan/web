'use client';

import { useState } from 'react';
import * as s from './style.css';
import { motion } from 'framer-motion';
import cn from 'classnames'
import EmojiKeyboard from '../EmojiKeyboard';

interface InputProps {
  placeholder?: string;
  value?: string;
  onSubmit?: () => void;
  onChange?: (value: string) => void;
}

export default function Input(props: InputProps) {
  const { placeholder, value, onSubmit, onChange } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <motion.div
        layout
        className={cn(s.base, { [s.focusing]: isFocused })}
        style={{borderRadius:999}}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && onSubmit) {
            onSubmit();
          }
        }}
        onClick={() => setIsFocused(prev => !prev)}
      >{
        value ||
        <motion.span layout className={s.placeholder}>{placeholder}</motion.span>
      }</motion.div>
      <EmojiKeyboard show={isFocused} onEmojiSelect={(emoji) => onChange?.(value + emoji)} />
    </>
  );
}
