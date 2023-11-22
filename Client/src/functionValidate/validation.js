export const validate = (inputs) => {        
// {email: '', password: ''}

    const passwordRegex = new RegExp("[0-9]");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};
    
    // EMAIL
    if(!emailRegex.test(inputs.email)){
        errors.email = 'El nombre de usuario tiene que ser un email'
    }
    if(!inputs.email){
        errors.email = 'El nombre de usuario no puede estar vacío.'
    }
    if(inputs.email.length > 35){
        errors.email = 'El nombre de usuario no puede tener más de 35 caracteres.'
    }
 
    // PASSWORDS
    if(!passwordRegex.test(inputs.password)){
        errors.password = 'La contraseña tiene que tener al menos un número.'
    }
    if(inputs.password.length < 6 && inputs.password.length > 10 ){
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres.'
    }

    return errors;
}