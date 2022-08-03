import { type as typeOut, type as loopedType } from '@camwiegert/typical'
import { memo, useEffect, useRef } from 'react'
import classNames from 'classnames'

type Props = {
  steps: any;
  loop: any;
  className?: string;
  as?: string;
}

function Typical({ steps, loop, className, as = 'p'}: Props) {
  const ref = useRef(null)

  useEffect(() => {
    if (loop === Infinity) {
      typeOut(ref.current, ...steps, loopedType)
    } else if (typeof loop === "number") {
      typeOut(
        ref.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      )
    } else {
      typeOut(ref.current, ...steps)
    }
  })

  return (
    <p ref={ref} className={classNames("after:content-['|']", className)} />
  )
}

export default memo(Typical)