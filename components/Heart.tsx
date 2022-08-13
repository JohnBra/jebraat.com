import cn from 'classnames'

type Props = {
  className: string
  active: boolean
}

export default function Heart({ className, active }: Props) {
  return (
    <div
      className={cn(
        'bg-animated-heart transition-bg-position cursor-pointer bg-left-top bg-no-repeat',
        active && '',
        className,
      )}
    />
  )
}
