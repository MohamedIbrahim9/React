import React from 'react';
import classes from "./Person.css";
// import styled from 'styled-components';
// import Radium  from 'radium'


const Person = (props) => {
    return (
        <div className = {classes.person}>
            <p onClick={props.click} className={classes.Title}>Hi I am {props.name} I am {props.age} old!</p>
            <p className="Title">{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>)
}

export default Person