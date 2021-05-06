import React from 'react'
import ViewOrders from '../../components/orders/ViewOrders'

import Body from '../../navigation/Body'

const Orders = () => {
    return (
        <div>
            <Body num={3} main={<ViewOrders />} title="Orders" />
        </div>
    )
}

export default Orders
