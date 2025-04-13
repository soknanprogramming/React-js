import React from 'react'
// import Person from './Person'

function NumberList() {
    const names = ['Bob', 'Alice', 'Charlie'];
    const nameList = names.map((name, index) => (
        <h2 key={index}>{index + 1}. {name}</h2>
    ))
    return <div>{nameList}</div>
}

export default NumberList;