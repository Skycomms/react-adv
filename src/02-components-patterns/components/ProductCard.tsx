import  { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, ProductCardProps as Props } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext;

export const ProductCard = ({children,product} :Props) => {   
const {increaseBy,counter} = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
    <div className={styles.productCard}>
        {children}
    </div>
    </Provider>
  )
}


