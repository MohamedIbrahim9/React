import React, { Component } from "react";
//import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
//import logo from "./logo.svg";
import classes from "./App.css";
import Persons from '../Components/Persons/Persons'
import Cookpit from "../Components/Cookpit/Cookpit";
import WithClass from '../Hoc/WithClass';
import AuthContext from '../Components/Context/auth-Context';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js Constructor 1 ]')
  }


  //update state 
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] Get Drived State ', props)
    return state;
  }
  // use http request avoid sycnrochns call not to make perfomenace bad 
  componentDidMount() {
    console.log('[App.js] componenet did mount  ');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] Should Component Update ', nextProps)
    return true;
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[App.js] SnapShot before Update ', nextProps)
    return { massage: 'SnapShot' }
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log('[App.js] Component did update ', snapshot)
  }


  state = {
    persons: [
      { id: '1', name: "Ahmed", age: 42 },
      { id: '2', name: "Ali", age: 25 },
      { id: '3', name: "mahmoud", age: 27 },
    ],
    other: "data",
    showPerson: false,
    characterCount: 0,
    authenticated: false
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


    //this is the best way to update state that depends on older state beacuse 
    //this.state might be used in different part of the app and it's not immediately updated 
    this.setState((prevState, props) => {
      return ({
        persons: persons,
        characterCount: prevState.characterCount + 1
      })
    })
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

  loginHandler() {
    console.log(this.state.authenticated);
    this.setState({ authenticated: true });
  }

  render() {
    console.log('[App.js] Render')
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
      <WithClass classes={classes.App}>
        <AuthContext.Provider value={{
           authenticated : this.state.authenticated,
           login:this.loginHandler
        }}>
          <Cookpit
            apptitle={this.props.apptitle}
            personLength={this.state.persons.length}
            click={this.togglePersonHandler} />
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
    // <div className='App'>
    //   <h1 className="App-title">Hello This is React</h1>
    // </div>
    //return React.createElement('div', {className:'App'},React.createElement('h1',{className:'App-title'},'Hello'));
  }
}

export default App;
