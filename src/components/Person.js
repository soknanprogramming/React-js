import React from 'react';

function Person(props){
    // key is not props,
    const key = props.key;
    const person = props.person;
    const {name, age, skill} = person;
    return (
        <div>
            <h2>
                {key} I am {name}. I am {age} years old. I know {skill}.
            </h2>
        </div>
    )
}

export default Person