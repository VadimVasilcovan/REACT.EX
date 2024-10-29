//props = read-only propertirs that are shared between components,
//        Aparent component can send data to a child component.
//        Component key=value


import React from 'react';


const Student = (props) => {
    return (
        <div>
            <p>Name: {props.name}, Age: {props.age}</p>
        </div>
    );
};



export default Student;
