function Button(){
const styles = {
   
  backgroundColor: "hsl(200,100%,50%)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px" ,
  border: "none",
  cursor :"pointer",

}

const handleClick = (event) =>{ 
    event.target.textContent = "clicked"
}

// let count = 0
// const handleClick = (name) => {
//     if(count < 3){
//         console.log(`${name} you clicked me ${count+1} times`)
//         count++;
//     }
//     else
//             console.log(`${name} stop clicking me`)

// }

// const handeClick = ()=> console.log("No no "); 
// const handeClick2 = (name) => console.log(`${name} donot click`)
    return(


        <button onClick={(e) => handleClick(e)} style={styles}>
            Click Me
        </button>
        // <button onClick={() => handeClick2("Zameer")} style={styles}>
        //     Click Me
        // </button>
    )
}
export default Button