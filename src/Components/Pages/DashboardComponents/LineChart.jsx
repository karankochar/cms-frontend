import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = (props) => {
    console.log(props.data)
    return (
        <div>
            {
                props.data.length ? 
                <Line
                data={{
                    labels: props.data.filter((user)=> user.role.toLowerCase()==="user").map((user)=>user.fullName),
                    datasets:[{
                        data: props.data.filter((user)=> user.role.toLowerCase()==="user").map((user)=>user.page.length),
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
