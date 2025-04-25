import { use, useEffect } from "react";
import { useState } from "react";

function UseEffectComp() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }
    , []);

    useEffect(() => {
        document.title = `Window Size : ${width} x ${height}`;
        console.log("Window size is updated to " + width + " x " + height);
        return () => {
            console.log("Window size is unmounted " + width + " x " + height);
        }
    }
    , [width, height]);








   // const [count, setCount] = useState(0);
    // const [color, setColor] = useState("red");
    // function addCount() {
    //     setCount(c => c + 1);
    // }
    // function subtractCount() {
    //     setCount(c => c - 1);
    // }

    // function changeColor(){
    //     setColor(c => c === "red" ? "blue" : "red");
    // }
    // useEffect(() => {
    //     document.title = `Count is ${count} ${color}`;
    //     console.log("Count is updated to " + count);
    //     return () => {
    //         console.log("Count is unmounted " + count);
    //     }
    // }
    // , [count, color]);

    return(<>

        <p>Window Width : {width}</p>
        <p>Window Height : {height}</p>



        {/* <p style={{color : color}}>Count : {count}</p>
        <button onClick={addCount}>Increment</button>
        <button onClick={subtractCount}>Decrement</button>
        <br />
        <button onClick={changeColor}>Change color</button> */}
        </>
    )
}

export default UseEffectComp;