import { PaymentButtonProps } from '../../../../../../@types/interfaces'
import { StyledPaymentButton } from './styles'

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  children,
  $isSelected,
  onClick,
}) => {
  const isSelectedBoolean =
    typeof $isSelected === 'boolean' ? $isSelected : false

  return (
    <StyledPaymentButton $isSelected={isSelectedBoolean} onClick={onClick}>
      {children}
    </StyledPaymentButton>
  )
}
