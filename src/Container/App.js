import React, { Component } from "react";
//import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
//import logo from "./logo.svg";
import classes from "./App.css";
import Persons from '../Components/Persons/Persons'
import Cookpit from "../Components/Cookpit/Cookpit";


class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Ahmed", age: "17" },
      { id: '2', name: "Ali", age: "25" },
      { id: '3', name: "mahmoud", age: "13" },
    ],
    other: "data",
    showPerson: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "17" },
        { name: "Ali", age: "15" },
      ],
    });
  };

  //dyncamic update person list 
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({},this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const personStatus = this.state.showPerson;
    this.setState({
      showPerson: !personStatus,
    });
  };

  detelePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }


  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          click={this.detelePersonHandler}
          changed={this.changeNameHandler} />
      );
    }
    return (
      <div className={classes.App}>
        <Cookpit
          persons={this.state.persons}
          click={this.togglePersonHandler} />
        {persons}
      </div>

    );
    // <div className='App'>
    //   <h1 className="App-title">Hello This is React</h1>
    // </div>
    //return React.createElement('div', {className:'App'},React.createElement('h1',{className:'App-title'},'Hello'));
  }
}

export default App;
