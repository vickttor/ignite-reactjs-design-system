import { MultiStepLabel, MultiStepContainer, Steps, Step } from './styles'

export interface MultiStepProps {
  size: number
  currectStep?: number
}

export function MultiStep({ size, currectStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <MultiStepLabel>
        Passo {currectStep} de {size}
      </MultiStepLabel>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currectStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
