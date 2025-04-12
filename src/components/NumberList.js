import React from 'react'
import Person from './Person'

function NumberList() {
    const persons = [
        {
            id: 1, 
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2, 
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3, 
            name: 'Diana',
            age: 35,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => (
        <Person person={person} key={person.id}></Person>
    ))
    return <div>{personList}</div>
}

export default NumberList;