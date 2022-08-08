import cn from 'classnames'

type Props = {
  className: string
  active: boolean
}

export default function Heart({ className, active }: Props) {
  return (
    <div
      className={cn(
        'cursor-pointer bg-animated-heart bg-left-top bg-no-repeat transition-bg-position',
        active && '',
        className,
      )}
    />
  )
}
