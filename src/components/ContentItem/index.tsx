import Typography from '../Typography'
import { base, content, image, snippet } from './styles.css'

export type Content = {
  title: string
  snippet: string
  image?: string
}

interface ContentProps {
  content: Content
}

export default function ContentItem(props: ContentProps) {
  return <div className={base}>
    {props.content.image && <img className={image} src={props.content.image} alt={props.content.title} />}
    <div className={content}>
      <Typography size={20}>{props.content.title}</Typography>
      <Typography size={14} className={snippet}>{props.content.snippet}</Typography>
    </div>
  </div>
}
