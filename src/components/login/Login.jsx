import React, { Component } from "react";
import { handleValidation } from '../formValidation/FormValidation';
import { getData, postData } from '../../apis/api';

const Login = (props) => {

    let email = React.createRef();
    let password =  React.createRef();
    let isLoggedIn = false;

const handleChechbox = (e) => {
    if(e.target.checked){
        isLoggedIn = true;
    }
}

    const handleLogin = (event) => {
           event.preventDefault();
          
           if (email.current.value === "sabir@hcl.com" && password.current.value === "sabir") {
                // Setting user email as token to validate product and cart page
                localStorage.setItem('token', email.current.value);
                
                props.history.push('/products');
                //localStorage.removeItem('token');
                
                    

           }else {
               alert('Email/password does not match!' );
           }

           // No post data web service as of now
            // getData(`users?email=${email.current.value}&password=${password.current.value}`)
            // .then(res=> {
            //     console.log(res.data);
               
            // }).catch(err=> {
            //     console.log(err);
            // })

       
    }


    
        return (
            <form>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name = "email" ref= {email} />
         
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" ref={password} />
        
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={handleChechbox}/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={handleLogin}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    
}

export default Login;