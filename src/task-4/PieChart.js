import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import classes from "./piechart.module.css"

function PieChart() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [input1Calculated, setInput1Calculated] = useState(0);
    // const [input2Calculated, setInput2Calculated] = useState(0);
    // const [prev1, setPrev1] = useState(0)
    // const [prev2, setPrev2] = useState(0)


    // const handleInput1Change = (event) => {
    //     const value1 = event.target.value;
    //     setPrev1(value1);
    //     setInput1(value1)
    //     console.log(prev1);
    //     setInput2Calculated(100 - value1);
    //     setInput2(input2Calculated);
    // };

    // const handleInput2Change = (event) => {
    //     const value2 = event.target.value;
    //     setInput2(value2);
    //     setPrev2(value2);
    //     console.log(prev2);
    //     setInput1Calculated(100 - value2);
    //     setInput1(input1Calculated);
    // };

    const handleInput1Change = (event) => {
        setInput1(event.target.value);
    };

    useEffect(() => {
        if (input1 !== '') {
            setInput2(100 - Number(input1));
        } else {
            setInput2('');
        }
    }, [input1]);

    const handleInput2Change = (event) => {
        setInput2(event.target.value);
    };

    useEffect(() => {
        if (input2 !== '') {
            setInput1(100 - Number(input2));
        } else {
            setInput1('');
        }
    }, [input2]);


    const handleCreateChart = () => {
        if (input1 === '' || input2 === '') {
            setErrorMessage('Please enter values in both input boxes.');
        } else if (Number(input1) > 100 || Number(input2) > 100) {
            setErrorMessage('Values should not exceed 100.');
        } else if (Number(input1) + Number(input2) !== 100) {
            setErrorMessage('The sum of values should be equal to 100.');
        } else {
            setErrorMessage('');
        }
        
        const chartCanvas = document.getElementById('chartCanvas');    
        new Chart(chartCanvas, {
            type: 'pie',
            data: {
                labels: ['Input 1', 'Input 2'],
                datasets: [
                    {
                        label: 'Chart Data',
                        data: [Number(input1), Number(input2)],
                        backgroundColor: ['rgb(200, 200, 200)', 'rgb(76, 76, 76)'],
                    },
                ],
            }
        }) ;
    }
        return (
            <>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div className={classes.formGroup}>
                        <label>Box1<br></br><input
                            type="number"
                            value={input1}
                            onChange={handleInput1Change}
                            placeholder="Value 1"
                            width={"250px"}
                        /></label>
                    </div>
                    <div className={classes.formGroup}>
                        <label>Box2<br></br><input
                            type="number"
                            value={input2}
                            onChange={handleInput2Change}
                            placeholder="Value 2"
                            // readOnly={input1 !== ''}
                            width="250px"
                        /></label>
                    </div>
                    <div className={classes.formGroup}>
                        <button className={classes.button2} onClick={handleCreateChart}>Create Chart</button>
                        <br />
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </div>
                {!errorMessage && <div className={classes.chartCanvas}>
                    <canvas id="chartCanvas"></canvas>
                </div>}
                </div>
            </>
        )
    };
export default PieChart;