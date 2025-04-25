import profilePic from '../assets/3.jpg'

function Card(){
return (
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture">
        </img>
        <h2 className='card-title'>ZAM</h2>
        <p className='card-text'>
            Passionate Software Engineer and learning web dev + ML
        </p>
    </div>

);

}

export default Card