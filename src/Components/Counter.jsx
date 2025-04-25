import {useState} from 'react'

function Counter(){

    const [count,setCount] = useState(0)
    const increment = ()=>{
        // setCount(count+1)
        // using updater function (for safe updates)
                setCount(c => c+1)

    }
     const decrement = ()=>{
        // setCount(count-1)
                setCount(c => c-1)

    }
     const reset = ()=>{
        // setCount(0)
                setCount(c=>c =0)

    }
    return(

        <div className='counter-container'>
            <p className='counter-text'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
                        <button className='counter-button' onClick={increment}>Increment</button>

            <button className='counter-button' onClick={reset}>reset</button>

        </div>
    )

}

export default Counter