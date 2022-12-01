import React, { useState } from 'react';

const Person = (props) => {
    const [ stateAge, setStateAge ] = useState(props.initialAge);
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age:{stateAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick= { (event) => setStateAge(stateAge + 1)} >Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default Person;