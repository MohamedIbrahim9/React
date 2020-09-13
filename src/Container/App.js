import React, { Component } from "react";
///import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import logo from "./logo.svg";
import classes from "./App.css";
import Person from '../Components/Persons/Person/Person'


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
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                click={()=>this.detelePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)} />
            })
          }
        </div>
      );
    }

    const assignedClasses = [classes.button];

    if (this.state.persons.length <= 2) { assignedClasses.push(classes.red) };
    if (this.state.persons.length <= 1) { assignedClasses.push(classes.bold) };

    return (
      <div className={classes.App}>
        <header className={classes['App-Header']}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React</h1>
        </header>
        <p className={classes.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className={assignedClasses.join(' ')}
          onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
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
