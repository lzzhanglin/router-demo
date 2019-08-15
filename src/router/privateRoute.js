import React from 'react'; 
import {Redirect,Route} from 'react-router-dom';
import auth from './auth'

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>{

      
            const login = auth.isAuthenticated();
            console.log("authentic？："+login)
            return auth.isAuthenticated() === true ?
            (
                <Component {...props} />
            )
             : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
        }
    />
);
