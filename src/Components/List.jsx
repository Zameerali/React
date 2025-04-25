import PropTypes from "prop-types";

function List({ items =[],
    category = 'category'
}){

    // const veg = ['tomato','potato','rice','spinach']
    // const lstveg = veg.map(lst => <li>{lst}</li>)
    // const veg = [{id:1,name : 'tomato',calories :123},
    //     {id:2,name : 'potato' , calories : 134}
    //     ,{id:3,name : 'rice' , calories : 2342},
    //     {id:4, name : 'spinach' , calories : 343}]
       // veg.sort((a,b) => a.name.localeCompare(b.name));  //A-Z
               // veg.sort((a,b) => b.name.localeCompare(a.name));// Z-A
       // veg.sort((a,b) => a.calories - b.calories) //ascend
//            veg.sort((a,b) => b.calories - a.calories)  //descend


    //         const lowCal = veg.filter(vegie => vegie.calories<1000)
    // const lstVeg = lowCal.map( lst => <li key={lst.id}>
    //     {lst.name} : &nbsp;
    //     <b>{lst.calories}</b>
    //     </li>)
    const vegList = items;
    const categories = category;
    const lstVeg = vegList.map( lst => <li key={lst.id}>
         {lst.name} : &nbsp;
         <b>{lst.calories}</b>
        </li>)
    return(<>
        <h3 className="list-category">{categories}</h3>
        <ol className="list-items">{lstVeg}</ol>

        </>
    )

}

List.propTypes = {
    category :PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
                                    id : PropTypes.number,
                                    name : PropTypes.string,
                                    calories : PropTypes.number,
    }))
}
export default List