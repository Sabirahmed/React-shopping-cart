import React, { Component } from 'react';
//import '../register/Register.css';
import { postData } from '../../apis/api';
import { handleValidation } from '../formValidation/FormValidation';


class Register extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            formData: {
                userName: '',
                password: '',
                email: '',
                mobile: 0

            }
        }

    }

    

    handleSubmit = (event) => {

        event.preventDefault();
        if(handleValidation(this.state)){
           // alert("Form submitted");
            postData('posts', this.state.postData).then(res=> {
                console.log(res);
                if (res.status === 201) {
                    alert('User successfully created!');
                    this.props.history.push('/Products')
                }
            }).catch((err) => {
                console.log(err);
            })
         }else{
            console.log("Form has errors.")
            
         }

    }

    handleChenged = (event) => {
        console.log(event.target.value);
        const {formData} = this.state;
        const {name, value} =  event.target;
        formData[name] = value;

    }

    render() { 
        return ( 
            <form>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="First name" name="userName" onChange={(event)=>this.handleChenged(event)} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" name = "email" onChange={(event)=>this.handleChenged(event)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={(event)=>this.handleChenged(event)}/>
            </div>

            <div className="form-group">
                <label>Mobile</label>
                <input type="number" className="form-control" placeholder="Last name" name="mobile" onChange={(event)=>this.handleChenged(event)}/>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={(event)=>this.handleSubmit(event)}>Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
            </p>
             
        </form>

               
            
         );
    }
}



// const styles = {
//         backgroundColor: 'darkseagreen',
        

//}
 
export default Register;