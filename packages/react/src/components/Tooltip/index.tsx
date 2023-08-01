import { ComponentProps, ReactNode } from 'react'
import { TooltipArrow, TooltipContent } from './styles'

import * as RadixTooltip from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<any> {
  message: string
  children: ReactNode
}

export const Tooltip = (props: TooltipProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{props.children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent sideOffset={5}>
            {props.message}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
