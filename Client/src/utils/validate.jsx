

const validate = function(inputs) {
    let errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexNumber = /\d/;

    if (!inputs.email) {
        errors.email = 'Debes ingresar un correo';
    }
    if (!regexEmail.test(inputs.email)) {
        errors.email = 'El correo no es valido';
    }
    if (inputs.email.length > 35) {
        errors.email = 'No debe tener mas de 35 caracteres';
    }
    if (!regexNumber.test(inputs.password)) {
        errors.password = 'Debe contener al menos un numero';
    }
    if (inputs.password.length < 6 || inputs.password.length > 10) {
        errors.password = 'Debe contener entre 6 y 10 caracteres';
    }
    return errors;
}

export default validate;