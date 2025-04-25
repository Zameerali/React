import PropTypes from 'prop-types'
function Student({name = "zameer", age = 20 , isStudent = true}){

    return(
        <div className="student">
            <p> Name : {name}</p>
            <p>Age : {age}</p>
                        <p>Is Student : {isStudent ? 'Yes': 'No'}</p>

        </div>
    )

}
Student.proptype = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool

}

export default Student 