const loginValidation = (email,password) => {
    let errors={};
    if(!email){
        errors.email = "Email is required.";
    } else if(!(/^[a-z]+_?\d*@(lus.ac.bd|gmail.com)$/.test(email))){
        errors.email = "Invalid email.";
    }
    if(!password){
        errors.password = "Password is required.";
    } 
    else if(!(/^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*]).{6,18}$/.test(password))){
        errors.password = "Invalid Password";
        if (password.length < 6){
            errors.password = "Password length is less than 6 characters.";
            }
        
    }
    return errors;
};

export default loginValidation;