import React, { useState, useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'

function goUp(smooth = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    })
  } else {
    document.documentElement.scrollTop = 0
  }
}

type Props = React.ComponentPropsWithoutRef<'button'> & {
  top?: number
  smooth?: boolean
  svgPath?: string
  viewBox?: string
  dark?: boolean
  className?: string
  width?: string
  height?: string
}

const ScrollToTop = ({
  top = 20,
  className = ``,
  dark = false,
  smooth = true,
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top)
    }
    onScroll()
    document.addEventListener(`scroll`, onScroll)
    return () => document.removeEventListener(`scroll`, onScroll)
  }, [top])

  return (
    <>
      {visible && (
        <button
          className={`scroll-to-top ${className}`}
          style={{ backgroundColor: dark ? `black` : `white` }}
          onClick={() => goUp(smooth)}
          aria-label="Scroll to top"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        >
          <FiChevronUp className="icon-position icon-style" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
