import React from 'react';
const Contact=(props)=>{
    return (
        <>
            <h1>Contact page</h1>
            <h1>{props.fun()}</h1>
        </>
    )
}
export default Contact;