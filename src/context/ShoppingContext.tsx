import { createContext, ReactNode, useState } from 'react'
import { IProductsDataCart } from '../@types/interfaces'

interface IShoppingContextType {
  productsCart: IProductsDataCart[]
  setProductsToCart: (product: IProductsDataCart) => void
  moreQntyProduct: (qntyProduct: number) => number
  lessQntyProduct: (qntyProduct: number) => number
}

export const ShoppingContext = createContext({} as IShoppingContextType)

interface IShoppingContextProviderProps {
  children: ReactNode
}

export const ShoppingContextProvider = ({
  children,
}: IShoppingContextProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProductsDataCart[]>([])

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

  const moreQntyProduct = (qntyProduct: number) => {
    const newQnty = qntyProduct + 1

    return newQnty
  }

  const lessQntyProduct = (qntyProduct: number) => {
    if (qntyProduct === 1) return qntyProduct

    const newQnty = qntyProduct - 1

    return newQnty
  }

  return (
    <ShoppingContext.Provider
      value={{
        productsCart,
        setProductsToCart,
        moreQntyProduct,
        lessQntyProduct,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}
