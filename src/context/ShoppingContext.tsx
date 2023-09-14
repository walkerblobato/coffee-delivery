import { createContext, ReactNode, useState } from 'react'
import { IProductsDataCart } from '../@types/interfaces'

interface IShoppingContextType {
  productsCart: IProductsDataCart[]
  setProductsToCart: (products: IProductsDataCart[]) => void
}

export const ShoppingContext = createContext({} as IShoppingContextType)

interface IShoppingContextProviderProps {
  children: ReactNode
}

export const ShoppingContextProvider = ({
  children,
}: IShoppingContextProviderProps) => {
  const [productsCart, setProductsCart] = useState<IProductsDataCart[]>([])

  const setProductsToCart = (products: IProductsDataCart[]) => {
    setProductsCart((prevState) => [...prevState, ...products])
  }

  return (
    <ShoppingContext.Provider value={{ productsCart, setProductsToCart }}>
      {children}
    </ShoppingContext.Provider>
  )
}
