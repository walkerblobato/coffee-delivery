import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { DeliveryAddress } from './Components/DeliveryAddress'
import { PaymentMethods } from './Components/PaymentMethods'
import { ProductsCart } from './Components/ProductsCart'

import { OrderContainer, OderUserData, Subtitle } from './styles'
import { IDataForm } from '../../@types/interfaces'
import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'
import { useNavigate } from 'react-router-dom'

export const deliveryAddressFormValidationSchema = zod.object({
  zipCode: zod.string().min(8, 'Informe um CEP válido').max(8),
  streetName: zod
    .string()
    .min(3, 'O nome da rua deve ter pelo menos 3 caracters'),
  streetNumber: zod.string().min(1, 'Informe o número da residência'),
  complement: zod.string(),
  district: zod
    .string()
    .min(3, 'O bairro deve ter pelo o menos três caracters'),
  city: zod
    .string()
    .min(3, 'O nome da cidade deve ter pelo o menos 3 caracters'),
  county: zod
    .string()
    .min(2, 'A UF deve ter pelo o menos 2 caracters')
    .max(2, 'A UF deve ter pelo o menos 2 caracters'),
})

export const OrderProducts = () => {
  const { register, handleSubmit, formState } = useForm<IDataForm>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
  })

  const { selectedPayment, setDataFormShopping } = useContext(ShoppingContext)
  const navigate = useNavigate()

  const handleCreateNewCycle: SubmitHandler<IDataForm> = (data) => {
    if (selectedPayment) {
      data.paymentMethod = selectedPayment

      setDataFormShopping(data)
      navigate('/order-success')
    }
  }

  return (
    <OrderContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <OderUserData>
          <Subtitle>Complete seu pedido</Subtitle>
          <DeliveryAddress register={register} formState={formState} />
          <PaymentMethods />
        </OderUserData>
        <OderUserData>
          <Subtitle>Cafés selecionados</Subtitle>
          <ProductsCart />
        </OderUserData>
      </form>
    </OrderContainer>
  )
}
