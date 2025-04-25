import { func } from "prop-types"
import { useState } from "react"

function UsingUpdater(){

    const [cars,setCars] = useState([])
    const [carYear,setCarYear] = useState(new Date().getFullYear())
    const [carMake,setCarMake] = useState("")
    const [carModel,setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {year:carYear,
            make : carMake,
            model : carModel,
        }
        setCars(c => [...c,newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    
    function handleRemoveCar(index){
        setCars(c=>c.filter((e,i)=> i!==index))
    }
    
    function handleYearChange(event){
        setCarYear(c=> event.target.value)
    }
    
    function handleMakeChange(event){
        setCarMake(c=> event.target.value)
    }
    
    function handleModelChange(event){
        setCarModel(c=> event.target.value)
    }









    // const [foods,setFoods] = useState(['apple'])

    // function handleAddFood(event){
    //     const newFood = document.getElementById('foodInput').value
    //     document.getElementById('foodInput').value = ""
    //     setFoods(f=> [...f,newFood])
    // }
    // function handleDeleteFood(index){
    //     setFoods(foods.filter((e,i) => i!==index ))
    // }
    // const [car,setCar] = useState({year : 2025,
    //                                 make : "honda",
    //                                 model : "city"
    // })
    // function handleYearChange(event){
    //     setCar(c=>({...c,year: event.target.value}))
    // }
    // function handleMakeChange(event){
    //     setCar(c=>({...c,make: event.target.value}))
    // }
    // function handleModelChange(event){
    //     setCar(c=>({...c,model: event.target.value}))
    // }
return (

    <div>
        <h2>List of Car objects</h2>
        <ul>
            {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                    </li>
            )}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange} />
        <br />
       <input type="text" value={carMake} onChange={handleMakeChange} 
       placeholder="Enter Car Make"/>
        <br />
          <input type="text" value={carModel} onChange={handleModelChange} 
       placeholder="Enter Car Model"/>
        <br />
        <button onClick={handleAddCar}>Add car</button>
    </div>










//     <div>

// <h2>List of foods</h2>
//     <ul>
//         {foods.map((food,index) =><li
//          key={index} onClick={() => handleDeleteFood(index)}>
//             {food}
//             </li> )}
//     </ul>
//     <input type="text"  id="foodInput" placeholder="Enter the food"/>
//     <button onClick={handleAddFood}>Add food</button>
//     </div>




    // <div>
    //     <p>Your fav car is : {car.year} {car.make} {car.model} </p>

    //     <input type="number" onChange={handleYearChange} value={car.year} />
    //     <br />
    //     <input type="text" onChange={handleMakeChange}  value={car.make} />
    //     <br />
    //     <input type="text" onChange={handleModelChange}  value={car.model} />
    // </div>
)
}

export default UsingUpdater