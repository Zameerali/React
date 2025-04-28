import {useRef, useEffect,useState} from 'react';


function UseRefComp() {

    // let [number,setNumber] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    useEffect(()=>{
        console.log("useEffect called")
        console.log(ref1)
    })
    function handleClick1(){
        // ref1.current = ref1.current + 1
        console.log(ref1.current);

        ref1.current.focus();

        ref1.current.style.backgroundColor = "red";
                ref2.current.style.backgroundColor = "";

                        ref3.current.style.backgroundColor = "";




        // setNumber(n => n+1)
        // console.log("Button clicked")
    }
    function handleClick2(){
        // ref1.current = ref1.current + 1
        console.log(ref1.current);

        ref2.current.focus();

        ref2.current.style.backgroundColor = "red";
         ref1.current.style.backgroundColor = "";

                        ref3.current.style.backgroundColor = "";



        // setNumber(n => n+1)
        // console.log("Button clicked")
    }
    function handleClick3(){
        // ref1.current = ref1.current + 1
        console.log(ref1.current);

        ref3.current.focus();

        ref3.current.style.backgroundColor = "red";
         ref1.current.style.backgroundColor = "";

                        ref1.current.style.backgroundColor = "";


        // setNumber(n => n+1)
        // console.log("Button clicked")
    }

        return (
            <div>
            <button onClick={handleClick1}>Click me</button>
            <input type="text" ref={ref1} />

            <button onClick={handleClick2}>Click me</button>
            <input type="text" ref={ref2} />

            <button onClick={handleClick3}>Click me</button>
            <input type="text" ref={ref3} />
            </div>
        )


}

export default UseRefComp;