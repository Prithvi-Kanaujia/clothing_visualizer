import React from 'react'

type CollapseProps = {
  isExpanded: boolean
  children: React.ReactNode
}

const Collapse = ({ isExpanded, children }: CollapseProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = React.useState(0)

  React.useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight)
    }
  }, [children])

  return (
    <div
      className="collapse"
      style={{
        display: isExpanded ? 'block' : 'none'
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

export default Collapse
