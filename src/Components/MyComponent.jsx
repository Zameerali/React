import React,{use, useState} from 'react'



function MyComponent(){

    const [name,setName] = useState("Guest")
    const [quantity,setQuantity] = useState(1)
    const [comment,setComment] = useState("")
    const [payment,setPayment] = useState("")
    const [shipping,setShipping] = useState("")

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }

    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} name="" id="" />
            <p>Name : {name}</p>
            <input value={quantity} onChange={handleQuantityChange} name="" id="" type='number' />
            <p>Quantity : {quantity}</p>

            <textarea name="" value={comment} onChange={handleCommentChange} placeholder='Enter your comments' id=""></textarea>
            <p>Comment : {comment}</p>



            <select value={payment} onChange={handlePaymentChange} name="" id="">
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
                        <option value="MasterCard">MasterCard</option>

            <option value="PayPak">PayPak</option>


            </select>
                    <p>Payment method : {payment}</p>


        <label htmlFor="">
            <input type="radio" value="Pick Up" 
             checked = {shipping ==="Pick Up"}
             onChange={handleShippingChange}   />
            Pick up
        </label>
            <input type="radio" value="Delivery" 
             checked = {shipping ==="Delivery"}
             onChange={handleShippingChange}   />
        <label htmlFor="">Delivery</label>
        <p>Shipping method : {shipping}</p>
        </div>
    )




    // const [name , setName] = useState("Guest")
    // const [age,setAge] = useState(0)
    // const [isEmployed,setIsEmployed] = useState(false)
    // const updateName = ()=>{
    //     setName("Zameer")
    // }
    //   const updateAge = ()=>{
    //     setAge(age+1)
    // }
    // const toggleStatus = () =>{
    //     setIsEmployed(!isEmployed)
    // }
    // return(
    //     <div>
    //         <p>Name : {name}</p>
    //         <button onClick={updateName}>Click to update</button>
    //           <p>Age : {age}</p>
    //         <button onClick={updateAge}>Click to update</button>

    //         <p>Employement Status  : {isEmployed ? "Yes" : "No"}</p>
    //         <button onClick={toggleStatus}>Click to toggle</button>
    //     </div>
    // )

}

export default MyComponent