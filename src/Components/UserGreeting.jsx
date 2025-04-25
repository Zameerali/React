import PropTypes from "prop-types"

function UserGreeting({isLoggedIn = false,username = ""}){

    const welcomeMessage = <h2 className="welcome-message">
        Welcome : {username}</h2>

    const loginPrompt =<h2 className="login-prompt">
        Login first</h2>
//    if(isLoggedIn){
//     return <h2>Welcome {username}</h2>
//    }
//    else{
//     return <h2>Please log in to continue </h2>
//    }
return (isLoggedIn ? welcomeMessage : loginPrompt )

}
UserGreeting.proptypes ={
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
}

export default UserGreeting