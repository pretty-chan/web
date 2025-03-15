'use client'

import { motion } from 'framer-motion';
import { base, focusing } from './styles/base.css';
import cn from 'classnames'

interface EmojiKeyboardProps {
  show: boolean;
}

export default function EmojiKeyboard(props: EmojiKeyboardProps) {
  return <>
    <motion.div layout className={cn(base, { [focusing]: props.show })}></motion.div>
  </>
}
