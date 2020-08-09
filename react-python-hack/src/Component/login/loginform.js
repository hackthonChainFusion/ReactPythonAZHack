import React, { useState } from 'react';
import './login.css';
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    msalApp,
    requiresInteraction,
    fetchMsGraph,
    isIE,
    GRAPH_ENDPOINTS,
    GRAPH_SCOPES,
    GRAPH_REQUESTS
} from "./auth-utils"; 

function LoginForm(props){
    const [usernameVal,setusernameVal] = useState()
    const setUserName = (e) => {
        setusernameVal(e.target.value);
    }
    const acquireToken = async (request) => {
        return msalApp.acquireTokenSilent(request).catch(error => {
            // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
            // due to consent or interaction required ONLY
            if (requiresInteraction(error.errorCode)) {
                msalApp.acquireTokenPopup(request);
            } else {
                console.error('Non-interactive error:', error.errorCode)
            }
        });
    }
    const onLogin = async (event) => {
        event.preventDefault();
        var account = ''
        var error = ''
        console.log('onsubmit',usernameVal);
        const LoginObj = {
            ...GRAPH_REQUESTS.LOGIN,
            loginHint: usernameVal
        }
        console.log(GRAPH_REQUESTS.LOGIN, LoginObj)
        
        const loginResponse = await msalApp
            .loginPopup(LoginObj)
            .then(() => {
                console.log('Login Successful');
                props.history.push('/dashboard');
            })
            .catch(error => {
                console.log(error.message)
            });

        
    }
    return(
        <div className = "MainContainer">
            <div className="NavContainer">
                    <FontAwesomeIcon icon = {faAppleAlt} className = "iconImage"/>
                    <span classNameName="WelcomeMsg">Welcome</span>
                    <div className="spacer"></div>
                    
            </div>
            <div className = "LoginContainer">
                <span className="LoginHeader">
                    Application Login
                </span>
                <div >
                    <form className="LoginSubCont" onSubmit = {onLogin} >
                        <input type = "text" 
                        placeholder="USER NAME OR EMAIL" 
                        id = "usernameInput" 
                        className = "inputBox"
                        onChange = {setUserName}
                        />
                        <div className = "loginSpace">
                            <span>
                                we will not share your user or email address
                            </span>
                        </div>
                        <button type="submit" className = "submitBtnCls">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;