import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  //useImperativeHandle() takes 2 params: first one is the ref passed to custom component and second one is a function that returns an object that allows to access functionality outside of the component
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  // the below useEffect() focuses the last input field rendered
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
