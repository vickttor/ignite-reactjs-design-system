import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
} from '@vickttorugo-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <Button size={'sm'}>Hover me!</Button>,
    message: "I'm a green button",
  },
}
