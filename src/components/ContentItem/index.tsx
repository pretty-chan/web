import Link from 'next/link'
import Typography from '../Typography'
import { base, content, image, link, snippet } from './styles.css'

export type Content = {
  title: string
  snippet: string
  image?: string
  link?: string
}

interface ContentProps {
  content: Content
}

export default function ContentItem(props: ContentProps) {
  const children = (
    <div className={base}>
      {props.content.image && <img className={image} src={props.content.image} alt={props.content.title} />}
      <div className={content}>
        <Typography size={20}>{props.content.title}</Typography>
        <Typography size={14} className={snippet}>{props.content.snippet}</Typography>
      </div>
    </div>
  )
  
  return props.content.link ? <Link className={link} href={props.content.link} target='_blank'>{children}</Link> : children
}
