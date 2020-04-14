const emailRegEx = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validate = (fields) => {
    const error = {};
    Object.keys(fields).forEach( name => {
        const value = fields[name];
        switch (name) {
            case 'firstName':
                if (value.length < 5) {
                    error[name] = 'First Name must be 5 char long!';
                }
                break;
            case 'lastName':
                if (value.length < 5) {
                    error[name] = 'Last Name must be 5 char long!';
                }
                break;
            case 'email':
                if (!emailRegEx.test(value)) {
                    error[name] = 'Email is not valid';
                }
                break;
            case 'password':
                if (value.length < 4) {
                    error[name] = 'Password must be min 4 char long!';
                }
                break;
            case 'userAgreement':
                if (!value) {
                    error[name] = 'Agreement must be accepted';
                }
                break;
            default:
                break;
        }
    });
    return error;
};

export default validate;