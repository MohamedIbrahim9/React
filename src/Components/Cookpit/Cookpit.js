import React, { useEffect, useRef } from 'react';
import classes from './Cookpit.css';
import logo from '../../Container/logo.svg';
import AuthContext from '../Context/auth-Context';


const Cookpit = (props) => {
    const toggleButton = useRef(null);

    
    useEffect(() => {
        console.log('[Cookpit.js] useEffect');

        //http request more like ComponentDidupdate , componentDidMount
        // setTimeout(()=>{
        //     console.log('get Data from api');
        // },1000);

        //runs when the render method is done successfully  
        // setTimeout(() => {
        //     toggleButton.current.click();
        // }, 1000);

        //runs only once when component is unmounted
        return () => {
            console.log('[Cookpit.js] useEffect when component is unMounted');
        }
        //here we pass depenedacy like [props.persons] it will run only when it changes 
        // if you pass empty array it will run once when component is mounted

    }, []);

    const assignedClasses = [classes.button];

    if (props.personLength <= 2) { assignedClasses.push(classes.red) };
    if (props.personLength <= 1) { assignedClasses.push(classes.bold) };

    return (
        <div>
            <header className={classes['App-Header']}>
                <img src={logo} className={classes.AppLogo} alt="logo" />
                <h1 className={classes.AppTitle}>Welcome to React & {props.apptitle}</h1>
            </header>
            <p className={classes.AppIntro}>
                To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            <button
                ref={toggleButton}
                className={assignedClasses.join(' ')}
                onClick={props.click}>
                Toggle Person
        </button>
            {/* <AuthContext.Consumer>
                {(context)=> 
                <button onClick={context.login}>
                    Login
                </button>}
            </AuthContext.Consumer> */}

        </div>
    );
}


//react memo for optizmations unless the input changes the component wont be rendered
export default React.memo(Cookpit);