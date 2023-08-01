import { ComponentProps } from 'react'

import { X } from '@phosphor-icons/react'
import {
  ToastProvider,
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string

  providerProps: ComponentProps<typeof ToastProvider>
  titleProps: ComponentProps<typeof ToastTitle>
  descriptionProps: ComponentProps<typeof ToastDescription>
}

export const Toast = ({
  title,
  description,
  providerProps,
  titleProps,
  descriptionProps,
  ...props
}: ToastProps) => {
  return (
    <ToastProvider {...providerProps}>
      <ToastContainer {...props}>
        <div>
          <ToastTitle {...titleProps}>{title}</ToastTitle>
          <ToastDescription {...descriptionProps}>
            {description}
          </ToastDescription>
        </div>
        <ToastAction asChild altText="Close Notification">
          <X size={20} weight="regular" />
        </ToastAction>
      </ToastContainer>

      <ToastViewPort />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
