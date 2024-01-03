import React from "react";

import classes from "./Input.module.css";

//To use useRef hook with custom components wrap the component function with React.forwardRef()
const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;