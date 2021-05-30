import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    return (
        <div>
            {
                props.data.length ? 
                <Line
                data={{
                    labels: props.data.map((user)=>user.fullName),
                    datasets:[{
                        data: props.data.map((user)=>user.page.length),
                        label: 'Pages',
                        borderColor:'#3333ff',
                        fill:'true'
                    }]
                }}
                />
                : null
            }   
        </div>
    )
}

export default LineChart
