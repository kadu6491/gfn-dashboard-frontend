import React from 'react'
import NewItem from '../../components/product/NewItem'

import Body from '../../navigation/Body'

const AddProduct = () => {
    return (
        <div>
            <Body num={2} main={<NewItem />} />
        </div>
    )
}

export default AddProduct
