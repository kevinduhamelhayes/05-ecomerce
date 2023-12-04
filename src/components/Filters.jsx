import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

export function Filters () {
  const [filters ,setFilters] = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">

      <div>
        <label htmlFor={minPriceFilterId}>A partir de</label>
        <input
        type="range"
        name=""
        id={minPriceFilterId}
        min="0"
        max="2000"
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select name="" id={categoryFilterId} onChange={handleCategory}>
          <option value="all">All</option>
          <option value="portatiles">Tech</option>
          <option value="moviles">Celulares</option>
          <option value="home">Home</option>
        </select>

      </div>
    </section>
  )
}
