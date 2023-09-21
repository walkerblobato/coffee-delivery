import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { UseFormRegister, FormState } from 'react-hook-form'
import { useState } from 'react'

import { IDataForm } from '../../../../@types/interfaces'

import {
  AddressInput,
  AddressInputContainer,
  InputSection,
  ErrorMessage,
  OpcionalInput,
} from './styles'

import {
  OrderComponentsContainer,
  OrderComponentsHeader,
  OrderComponentsTitle,
} from '../../styles'

export const DeliveryAddress = ({
  register,
  formState,
}: {
  register: UseFormRegister<IDataForm>
  formState: FormState<IDataForm>
}) => {
  const [dataComplement, setDataComplement] = useState('')

  const theme = useTheme()
  const errors = formState.errors

  return (
    <OrderComponentsContainer>
      <OrderComponentsHeader $colorsvg={theme.product['yellow-dark']}>
        <MapPinLine size={22} />

        <OrderComponentsTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </OrderComponentsTitle>
      </OrderComponentsHeader>

      <AddressInputContainer>
        <AddressInput placeholder="CEP" width="38%" {...register('zipCode')} />
        {errors?.zipCode && (
          <ErrorMessage>{errors.zipCode.message}</ErrorMessage>
        )}
        <AddressInput placeholder="Rua" {...register('streetName')} />
        {errors?.streetName && (
          <ErrorMessage>{errors.streetName.message}</ErrorMessage>
        )}
        <InputSection $direction={errors?.streetName ? 'column' : 'row'}>
          <AddressInput
            placeholder="Número"
            width="38%"
            {...register('streetNumber')}
          />
          {errors?.streetNumber && (
            <ErrorMessage>{errors.streetNumber.message}</ErrorMessage>
          )}
          <AddressInput
            placeholder="Complemento"
            width="100%"
            {...register('complement')}
            onChange={(e) => setDataComplement(e.target.value)}
          />
          {dataComplement.length === 0 && (
            <OpcionalInput>Opcional</OpcionalInput>
          )}
        </InputSection>
        <InputSection $direction={errors?.district ? 'column' : 'row'}>
          <AddressInput placeholder="Bairro" {...register('district')} />
          {errors?.district && (
            <ErrorMessage>{errors.district.message}</ErrorMessage>
          )}
          <InputSection
            $direction={errors?.city || errors?.county ? 'column' : 'row'}
          >
            <AddressInput
              placeholder="Cidade"
              width="75%"
              {...register('city')}
            />
            {errors?.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
            <AddressInput
              placeholder="UF"
              width="25%"
              {...register('county')}
            />
            {errors?.county && (
              <ErrorMessage>{errors.county.message}</ErrorMessage>
            )}
          </InputSection>
        </InputSection>
      </AddressInputContainer>
    </OrderComponentsContainer>
  )
}
