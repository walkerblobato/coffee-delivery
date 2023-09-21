export interface IProductsDataCart {
  id: number
  iconSrc: string
  name: string
  options: string[]
  price: number
  qnty: number
  cartQnty: number
}

export interface PaymentButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  $isSelected: boolean
}

interface IDataForm {
  zipCode: string
  streetName: string
  streetNumber: string
  complement: string
  district: string
  city: string
  county: string
  paymentMethod?: string
}
