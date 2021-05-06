import React from 'react'
import ProductList from '../../components/product/ProductList'

import Body from '../../navigation/Body'

const Products = () => {
    return (
        <Body main={<ProductList />} num={2} title="Products"/>
    )
}

export default Products
