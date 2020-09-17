import React, { Component } from 'react';
import Person from './Person/Person'

//we can use pureComponent to check if the props changes instead of using shouldComponentUpdate it will do it automatically
class Persons extends Component {
  static getDerviedStateFromProps(props, state) {
    console.log('[Persons.js] Get Drived State ', props)
    return state;
  }


  //use pureComponent instead
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] Should Component Update ', nextProps)
    if (nextProps.persons !== this.props.persons ||
       nextProps.changed !== this.props.changed ||
       nextProps.click !== this.props.click) {
      return true;
    }
    else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[Persons.js] SnapShot before Update ', nextProps)
    return { massage: 'SnapShot' }
  }

  componentDidUpdate(nextProps, nextState, snapshot) {
    console.log('[Persons.js] Component did update ', snapshot)
  }

  componentWillUnmount() {
    console.log('[Persons.js] Component will unmont');
  }
  render() {
    console.log('[Persons.js] People Render Manger ');
    return (
      this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)} />
      }))
  }
}

export default Persons