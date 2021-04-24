import React from 'react'
import { Chart } from "react-google-charts";
const OrderStatusGraph = () => {
    return (
        <div>
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Status', 'Hours per Day'],
                    ['Completed', 1],
                    ['Inprogress', 1],
                    ['Cancel', 1],
                ]}
                options={{
                    title: 'Current Status of total orders',
                    // Just add this option
                    is3D: true,
                    slices: {
                        0: { color: 'green' },
                        1: { color: '#fd7014' },
                        2: { color: '#dc3545'},
                      },
                }}
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default OrderStatusGraph
