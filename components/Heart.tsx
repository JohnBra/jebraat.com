import cn from 'classnames'

type Props = {
  className: string;
  active: boolean;
}

export default function Heart({ className, active }: Props) {
  return (
    <div
      className={cn(
        'bg-animated-heart bg-left-top bg-no-repeat cursor-pointer transition-bg-position',
        active && '',
        className
      )}
    />
  )
}