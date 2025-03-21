"use client"

import { Tooltip, Portal } from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  disabled?: boolean
  children: React.ReactNode // ✅ Fix: Define 'children'
}

export const CustomTooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  function CustomTooltip(props, ref) {
    const { showArrow, children, disabled, portalled = true, content } = props

    if (disabled) return <>{children}</> // If disabled, just return the children

    return (
      <Portal containerRef={portalled ? props.portalRef : undefined}>
        <Tooltip label={content} hasArrow={showArrow}>
          <span ref={ref}>{children}</span> {/* ✅ Now 'children' is defined */}
        </Tooltip>
      </Portal>
    )
  },
)
