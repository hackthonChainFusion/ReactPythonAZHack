import React, { useState } from 'react';
import {faAppleAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
function DashboardHome(props){
    const [apiresp,setAPIresp] = useState();
    const ShowApiResp = () => {
        axios({
            method : 'get',
            url : 'http://127.0.0.1:5000/taskslist'
        }).then((resp)=>{
            console.log(resp.data.message);
            setAPIresp(resp.data.message)
        })
    }
    return(
        <div class = "MainContainer">
            <div class="NavContainer">
                    <FontAwesomeIcon icon = {faAppleAlt} className = "iconImage"/>
                    <span class="WelcomeMsg">Welcome</span>
                    <div class="spacer"></div>
            </div>
            <div class = "LoginContainer">
                <h1>Welcome to Dashboard</h1>
                <button onClick = {ShowApiResp}>
                Click me
                </button>
                <p>{apiresp}</p>
            </div>
        </div>
    )
}

export default DashboardHome;