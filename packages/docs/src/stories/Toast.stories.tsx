import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@vickttorugo-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const [isToastOpen, setIsToastOpen] = useState(false)

      const handleOpenToast = () => setIsToastOpen(true)

      return (
        <>
          <Button size="sm" onClick={handleOpenToast}>
            Open Toast Notification
          </Button>
          {Story({
            args: {
              title: 'Primary Toast Notification',
              description: 'This toast is using Radix UI.',
              open: isToastOpen,
              onOpenChange: setIsToastOpen,
            },
          })}
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
