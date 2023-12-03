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
  const filterProducts = (product) => {
    return products.filter(product => {
      return (product.price >= filter.minPrice &&
        (filter.category === 'all' || product.category === filter.category)
      )
    }
    )
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
    <Header changeFilters ={setFilter}/>
    <Products products= {filteredProducts}/>
    </>
  )
}

export default App
