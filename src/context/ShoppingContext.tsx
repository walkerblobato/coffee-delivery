import { createContext, ReactNode, useState } from 'react'
import { IDataForm, IProductsDataCart } from '../@types/interfaces'
import { PaymentMethodType } from '../@types/types'

interface IShoppingContextType {
  productsCart: IProductsDataCart[]
  totalItems: number
  selectedPayment: PaymentMethodType | null
  dataFormShopping: IDataForm | null
  setProductsToCart: (product: IProductsDataCart) => void
  removeProductCart: (id: number) => void
  calculateTotalItems: () => void
  updateQuantity: (id: number, cartQnty: number) => void
  setSelectedPayment: (paymentMethod: PaymentMethodType) => void
  setDataFormShopping: (dataFormShopping: IDataForm) => void
}

export const ShoppingContext = createContext({} as IShoppingContextType)

interface IShoppingContextProviderProps {
  children: ReactNode
}

export const ShoppingContextProvider = ({
  children,
}: IShoppingContextProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProductsDataCart[]>([])
  const [totalItems, setTotalItems] = useState(0)
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethodType | null>(null)
  const [dataFormShopping, setDataFormShopping] = useState<IDataForm | null>(
    null,
  )

  const setProductsToCart = (product: IProductsDataCart) => {
    const productIndex = productsCart.findIndex(
      (productCart) => productCart.id === product.id,
    )

    if (productIndex !== -1) {
      productsCart[productIndex].qnty += product.qnty

      return
    }

    setProductsCart((prevState) => [...prevState, product])
  }

  const removeProductCart = (id: number) => {
    const productsCartWithoutProductToDelete = productsCart.filter(
      (productCart) => productCart.id !== id,
    )

    setProductsCart(productsCartWithoutProductToDelete)
  }

  const calculateTotalItems = () => {
    const totalValue = productsCart.reduce(
      (accumulator, product) => accumulator + product.price * product.cartQnty,
      0,
    )

    setTotalItems(totalValue)
  }

  const updateQuantity = (id: number, qntyProductCard: number) => {
    const updatedCart = productsCart.map((item) =>
      item.id === id ? { ...item, cartQnty: qntyProductCard } : item,
    )

    setProductsCart(updatedCart)
  }

  console.log(dataFormShopping)

  return (
    <ShoppingContext.Provider
      value={{
        productsCart,
        totalItems,
        selectedPayment,
        dataFormShopping,
        setProductsToCart,
        removeProductCart,
        calculateTotalItems,
        updateQuantity,
        setSelectedPayment,
        setDataFormShopping,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
