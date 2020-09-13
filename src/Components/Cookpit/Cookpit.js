import React from 'react';
import classes from './Cookpit.css'
import logo from '../../Container/logo.svg'


const Cookpit = (props) => {

    const assignedClasses = [classes.button];

    if (props.persons.length <= 2) { assignedClasses.push(classes.red) };
    if (props.persons.length <= 1) { assignedClasses.push(classes.bold) };

    return (
        <div>
            <header className={classes['App-Header']}>
                <img src={logo} className={classes.AppLogo} alt="logo" />
                <h1 className={classes.AppTitle}>Welcome to React</h1>
            </header>
            <p className={classes.AppIntro}>
                To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
                className={assignedClasses.join(' ')}
                onClick={props.click}>
                Toggle Person
        </button>
        </div>
    );
}

export default Cookpit;