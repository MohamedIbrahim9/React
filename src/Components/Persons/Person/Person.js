import React, { Component } from 'react';
import Auxillary from '../../../Hoc/Auxillary';
import classes from "./Person.css";
import PropTypes from 'prop-types';
import AuthContext from '../../Context/auth-Context';


// import styled from 'styled-components';
// import Radium  from 'radium'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        //we have two method either funnction or use react create Ref 
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[Person.js] People is being Rendered ');

        //we can use wrapping high order component to wrap our adjescent elements 
        //or we can return [<p/>,<h/>,<h2/>] but we need a key value
        //we can use React.fragment to do the same as AUX 
        // or we can import fragment from react directly 
        return (
            <Auxillary >
                <AuthContext.Consumer>
                    {(context) => context.authenticated ?
                        <p>Authenicated!</p>
                        : <p>Please Login!</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}
                    className={classes.Title}>Hi I am {this.props.name} I am {this.props.age} old!</p>
                <p className="Title">{this.props.children}</p>
                <input type="text"
                    //ref={(inputElem => { this.inputElement = inputElem })}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}></input>
            </Auxillary>)
    }

}

//to sure that all the props are in the right data format 
Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string
}

export default Person