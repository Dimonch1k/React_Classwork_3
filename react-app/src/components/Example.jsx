import React from 'react';

const Example = () => {

    const handleClick = () => {
        alert("Hello World");
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>

            <hr />
        </div>
    );
}

export default Example;
