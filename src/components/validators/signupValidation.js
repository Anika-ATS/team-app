const signupValidation = (values) => {
    let err={};
    if(!values.Name){
        err.name = "Name is required.";
    }else if(!(/^[a-z\s]+$/.test(values.Name))){
        err.name = "Please enter only letters.";
    }
    if(!values.Height){
        err.height = "Height is required.";
    }else if(!(/^[0-9.]+?$/.test(values.Height))){
        err.height = "Please enter only number.";
    }
    if(!values.email){
        err.email = "Email is required.";
    } else if(!(/^[a-z]+_?\d*@(lus.ac.bd|gmail.com)$/.test(values.email))){
        err.email = "Invalid Email.";
    }
    if(!values.phone){
        err.mobile = "Phone number is required.";
    } else if(!(/^(\+88)?01[3-9]{1}[0-9]{8}$/.test(values.phone))){
        err.mobile = "Invalid phone number";
    }
    if(!values.password){
        err.password = "Password is required.";
    } else if(!(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*]).{6,18}$/.test(values.password))){
        err.password = "Password must contain at least one digit, one alphabet and one special character.";
        if (values.password.length < 6){
            err.password = "Password length is less than 6 characters.";
        }
    
    }
    if(values.password!==values.ConPassword){
        err.confirmPassword = "Password didn't match.";
    }
    return err;
};

export default signupValidation;