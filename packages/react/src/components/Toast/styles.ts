import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = Toast.Provider

const VIEWPORT_PADDING = 25

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '10px',
  width: 'auto',
  minWdith: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Toast, {
  padding: '$4',
  border: '1px solid $gray600',
  background: '$gray800',
  borderRadius: '$sm',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '$4',
  flexDirection: 'row',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: 'base',
  marginBottom: '$1',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 1,
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$shorter',
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 4,
})

export const ToastAction = styled(Toast.Action, {
  cursor: 'pointer',
  padding: '$1',
  color: '$gray200',
  borderRadius: '$sm',
  border: '1px solid transparent',

  '&:focus': {
    borderColor: '$ignite300',
  },

  '&:hover': {
    color: '$gray100',
  },
})
