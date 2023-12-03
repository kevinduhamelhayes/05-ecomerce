import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App () {
  const [products] = useState(initialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0

  })
  const filteredProducts = (product) => {
    return product.filter(product => {
      return (product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    }
    )
  }
  const filteretedProducts = filteredProducts(products)

  return (
    <>
    <Header changeFilters ={setFilter}/>
    <Products products= {filteretedProducts}/>
    </>
  )
}

export default App
