import React, {useEffect, useState} from 'react'

import { Chart } from "react-google-charts";


const RevenueGraph = () => {
    
    return (
        <div>
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Total', 'Month'],
                    ["Jan", 0],
                    ["Febuary", 10],
                    ["March", 23],
                    ["April", 17],
                    ["May", 18],
                    ["June", 9],
                    ['Yuly', 11],
                ]}
                options={{
                    hAxis: {
                    title: 'Month',
                    },
                    vAxis: {
                    title: 'Total Order',
                    },
                }}
            />
        </div>
    )
}

export default RevenueGraph
