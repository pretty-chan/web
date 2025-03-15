'use client'

import { motion } from 'framer-motion';
import { base, focusing } from './styles/base.css';
import cn from 'classnames'
import { emojis } from './emoji';
import { emoji } from './styles/emoji.css';

interface EmojiKeyboardProps {
  show: boolean;
  onEmojiSelect?: (emoji: string) => void;
}

export default function EmojiKeyboard(props: EmojiKeyboardProps) {
  const { show } = props;

  return <>
    <motion.div
      layout
      className={cn(base, { [focusing]: show })}
    >{
      emojis.map((e, i) => (
        <span
          key={i}
          className={emoji}
          onClick={() => props.onEmojiSelect?.(e)}
        >{e}</span>
      ))
    }</motion.div>
  </>
}
