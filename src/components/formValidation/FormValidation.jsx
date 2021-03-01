

export const handleValidation = (props) => {

    console.log("validating", props);
        let fields = props.formData;
        let formIsValid = true;

        //validating user name
        if(!fields["userName"]){
           formIsValid = false;
           alert ("User name cannot be empty");
           return
        }
  
        if(typeof fields["userName"] !== "undefined"){
           if(!fields["userName"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              alert('Please enter letter only!')
              return
           }        
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           alert ("Email cannot be empty");
           return
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              alert("Email is not valid");
              return
            }
       }  

       // password

        if(!fields["password"]){
            formIsValid = false;
            alert ("password cannot be empty");
            return
        }

        if(typeof fields["password"] !== "undefined"){
            
            if ((fields["password"].length) < 7){
               formIsValid = false;
               alert("password length should be more than 7 character");
               return
             }
        }  

        // Mobile
        if(!fields["mobile"]){
            formIsValid = false;
            alert ("Mobile number cannot be empty");
            return
        }

        if(typeof fields["mobile"] !== "undefined"){
            
            if ((fields["mobile"].length) < 10){
               formIsValid = false;
               alert("Please enter valid mobile number");
               return
             }
        }  


       //

       return formIsValid;
}