import classNames from 'classnames'

type Props = {
  className?: string;
}

export default function SquigglyLine({ className }: Props) {
  return (
    <div className={classNames('relative', className)}>
      <div className={"h-2.5 w-full"}>
        <div className="squiggly-line zig" />
        <div className="squiggly-line zag" />
      </div>
    </div>
  )
}