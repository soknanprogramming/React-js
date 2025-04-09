import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //         Hello Bro
    //     </div>
    // );
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Soknan')
    );
}

export default Hello;