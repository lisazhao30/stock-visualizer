import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const LineGraph = ({...props}) => {
    const { APIKey, url, searchedItem } = props;
    const [stockPriceData, setStockPriceData] = useState([]);
    const [stockDateLabel, setStockDateLabel] = useState([]);

    const getHistoricalPrices = async () => {
        try {
            const response = await axios.get(`${url}/historical-price-full/${searchedItem.toUpperCase()}?apikey=${APIKey}`);

            const tempStockPriceArr = [];
            const tempStockDateArr = [];
            response.data.historical.reverse().forEach((item) => {
                tempStockPriceArr.push(item.close);
                tempStockDateArr.push(item.date);
            })
            setStockPriceData(tempStockPriceArr)
            setStockDateLabel(tempStockDateArr);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getHistoricalPrices();
    }, [])

    const graphData = {
        labels: stockDateLabel,
        datasets: [
            {
                label: 'Stock Price',
                fill: false,
                lineTension: 0.5, //makes lines curvy
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: stockPriceData
            }
        ]
    }

    return (
        <div className="Wrapper">
            <Line 
                data={graphData}
                options={{
                    title: {
                        display: true,
                        text: 'Stock Prices',
                        fontSize: 20
                    },
                    scales: {
                        y: {
                          title: {
                            display: true,
                            text: 'Closing Price'
                          }
                        },
                        x: {
                            title: {
                              display: true,
                              text: 'Date'
                            }
                          }
                      }     
                }}
            />
        </div>
    )
}

export default LineGraph