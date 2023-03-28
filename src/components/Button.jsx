import React from "react";

const Button = ( { text }) => {
    const onClickHandler = () => {
        alert ('Na na na');
    }

    return <button onClick={onClickHandler}> {text}</button>;
};


export default Button;