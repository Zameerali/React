
function ProfilePicture(){
    const imgURL = '.././src/assets/1.jpg'
        const handleClick = (e) => {
            e.target.style.display = "none"
        }
    return (

        <img onClick={(e) => handleClick(e)} src={imgURL}></img>
    )
}

export default ProfilePicture