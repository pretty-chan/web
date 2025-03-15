'use client';

interface TypographyProps {
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  size?: number;
  color?: string;
  children?: string;
  className?: string;
}

export default function Typography(props: TypographyProps) {
  const {
    weight = 400,
    size = 16,
    color = '#000',
    children,
    className,
  } = props;

  return (
    <p
      className={className}
      style={{
        fontWeight: weight,
        fontSize: size,
        color,
      }}>
      {children}
    </p>
  );
}
