import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@vickttorugo-ignite-ui/react'
import { useState } from 'react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      const [isToastOpen, setIsToastOpen] = useState(false)

      const handleOpenToast = () => setIsToastOpen(true)

      return (
        <Box>
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
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
