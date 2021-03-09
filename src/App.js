import React from 'react'
import useCustomCounter from './Custom'

const App =()=> {
    const data= useCustomCounter();
    const data1= useCustomCounter();
    return (
        <React.Fragment>
            <h3>A custom hook allows you to extract some components logic into a reusable function.</h3>
            <h4>Counter Up:{data.count}</h4>
            <button  type ="button" onClick={data.handleCounter}>Click Me</button>
            <h4>Counter Up:{data1.count}</h4>
            <button  type ="button" onClick={data1.handleCounter}>Click Me</button>
            </React.Fragment>
    )
}

export default App;
