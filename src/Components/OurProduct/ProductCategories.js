import React from 'react'
import FilteredCatalog from './Categories/FilteredCatalog'
import Product1 from './ProductDesign/Product1'
import Product from './Hero-Product/Catalog'
import Catalog from './Hero-Product/Catalog'

const ProductCategories = () => {
  return (
    <div>
      <Product/>
      <FilteredCatalog/>
      {/* <Product1/> */}
    </div>
  )
}

export default ProductCategories
