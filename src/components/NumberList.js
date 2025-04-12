import React from 'react'

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
    const personList = persons.map(person => (<h2 key={person.id}>
                                                I am {person.name}.
                                                I am {person.age} years old.
                                                I a {person.skill} developer.
                                            </h2>))
    return <div>{personList}</div>
}

export default NumberList;