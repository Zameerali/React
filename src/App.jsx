import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Card from './Components/Card.jsx'
import Button from './Components/Button.jsx'
import Student from './Components/Students.jsx'
import UserGreeting from './Components/UserGreeting.jsx'
import List from './Components/List.jsx'
import ProfilePicture from './Components/ProfilePicture.jsx'
import MyComponent from './Components/MyComponent.jsx'
import Counter from './Components/Counter.jsx'
import ColorPicker from './Components/ColorPicker.jsx'
import UsingUpdater from './Components/UsingUpdater.jsx'
function App() {
      // const veg = [{id:1,name : 'tomato',calories :123},
      //   {id:2,name : 'potato' , calories : 134},
      //   {id:3,name : 'rice' , calories : 2342},
      //   {id:4, name : 'spinach' , calories : 343}]
      //        const fruits = [{id:1,name : 'tomato',calories :123},
      //   {id:2,name : 'potato' , calories : 134},
      //   {id:3,name : 'rice' , calories : 2342},
      //   {id:4, name : 'spinach' , calories : 343}]
    return (
      <>

      {/* <Counter/> */}
      {/* <MyComponent/> */}
        {/* <ProfilePicture/> */}
      {/* <ColorPicker/> */}
      <UsingUpdater/>



      {/* <Header/> */}
      {/* <Food/> */}
      {/* <Card/> */}
      {/* <Button/> */}
      {/* <Student name = 'ahmad' age = {30} isStudent = {true}/>
            <Student name = 'Ali' age = {20} isStudent = {true}/>

      <Student name = 'ahmad' age = {30} isStudent = {true}/>

      <Student/> */}


  {/* <UserGreeting isLoggedIn = {true} username = "Zameer"/>
    <UserGreeting /> */}
     {/* {veg.length >0 ?  <List items = {veg} category = "vegies"/> :null }
       {fruits.length>0 && <List items = {fruits} category = "Fruits"/> } */}

      {/* <Footer/> */}
      </>
    )
}

export default App
