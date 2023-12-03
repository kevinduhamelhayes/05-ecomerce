import './Filters.css'
import { useState } from 'react'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({ ...prevState, minPrice: event.target.value})
    )
  }
  
  const handleCategory = (event) => {
    onChange(prevState => {
      return {
        ...prevState,
        category: event.target.value
      }
    }
    )
  }

  return (
    <section className="filters">

      <div>
        <label htmlFor="price">A partir de</label>
        <input type="range" name="" id="price" min="0" max="2000" onChange={handleMinPrice} />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoria</label>
        <select name="" id="category" onChange={handleCategory}>
          <option value="all">All</option>
          <option value="tech">Tech</option>
          <option value="clothes">Clothes</option>
          <option value="home">Home</option>
        </select>

      </div>
    </section>
  )
}
