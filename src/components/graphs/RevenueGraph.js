import React from 'react'

import { Chart } from "react-google-charts";


const RevenueGraph = () => {
    
    return (
        <div>
            <Chart
                width={'100%'}
                height={'300px'}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Total', 'Orders'],
                    ["Jan", 0],
                    ["Febuary", 10],
                    ["March", 23],
                    ["April", 17],
                    ["May", 18],
                    ["June", 9],
                    ['Yuly', 11],
                ]}
                options={{
                    hAxis: { title: 'Months', titleTextStyle: { color: '#333' } },
                    legend: { position: 'top', maxLines: 3 },
                    vAxis: { minValue: 0 },
                }}
            />
        </div>
    )
}

export default RevenueGraph
