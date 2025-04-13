import React from 'react';


const heading = {
    fontSize: '10px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'/* It not working */>Error 2</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline;