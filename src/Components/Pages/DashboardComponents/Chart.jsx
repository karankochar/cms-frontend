import React from 'react'
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
    const colors = [
        'rgba(0, 0, 255, 0.5)',
        'rgba(0, 255, 0, 0.5)',
        'rgba(243, 255, 15, 0.5)',
        'rgba(255, 0, 0, 0.5)',
        'rgba(0, 220, 244, 0.5)',
        'rgba(195, 48, 181, 0.5)',
        '#E76D83'
    ]
    return (
        <div>
            {props.data.length ?
                <Bar
                    data={{
                        labels: props.data.map((item) => item.categoryTitle),
                        datasets: [{
                            label: "Pages",
                            backgroundColor: colors.map((color)=> color),
                            data: props.data.map((item) => item.pageList.length)
                        }]
                    }}
                    options={{
                        legend: { display: false },

                    }}
                />

                : null}
        </div>

    )
}

export default Chart
