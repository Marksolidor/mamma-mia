import React from 'react'
import { useEffect, useState } from 'react'
export const ProductsContext = React.createContext()
const InfoProvider = (props) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    jsonData()
  }, [])

  const jsonData = async () => {
    try {
      const url = '/pizzas.json'
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    } catch (e) {
      alert('Mensaje del Servidor: No se pudo establecer la conexión')
    }
  }

  return (
    <ProductsContext.Provider
      value={{ products, setProducts }}
    >
      {props.children}
    </ProductsContext.Provider>
  )
}

export default InfoProvider