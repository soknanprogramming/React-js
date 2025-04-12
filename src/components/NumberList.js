import React from 'react'

function NumberList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Wade'];
    /*
    return (
        <div>
            {
                names.map( name => <h2>{name}</h2> )
            }
        </div>
    )
    */
   const nameList = names.map( (name, index) => <h2 key={index}>{name}</h2> );
   return <div> {nameList} </div>
}

export default NumberList;