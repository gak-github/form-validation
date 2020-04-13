import React , { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Account() {
    const { createAccount } = useContext(GlobalContext);
    const [ state, setState] = useState({account: {}, error: {}});
    const error = state.error;
    const account = state.account;
    /* no-useless-escape */
    const emailReg =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const updateAccount = (e) => {
        const { name, value, checked } = e.target;
        switch (name) {
            case 'firstName':
                error[name] = value.length < 5 ? 'First Name must be 5 char long!': '';
                break;
            case 'lastName': 
                error[name] = value.length < 5 ? 'Last Name must be 5 char long!' : '';
                break;
            case 'email':
                error[name] = emailReg.test(value) ? '': 'Email is not valid!';
                break;
            case 'password':
                error[name] = value.length < 4 ? 'Password must be min 4 char long!': '';
                break;
            case 'userAgreement':
                error[name] = !checked ? 'Agreement must be accepted': '';
                break;    
            default:
                break;
        }

        if (name === 'userAgreement') {
            let agreement = checked ? true : false;
            setState({
                account: { ...account, [name]: agreement },
                error
            });
            return;
        }
    
        setState({
            account: {...account, [name] : value},
            error
        });
    };
    const validateForm = (error) => {
        let valid = true;
        Object.keys(error).forEach((key) => error[key].length > 0 && (valid = false));
        return valid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm(error)) {
            return;
        }
        createAccount(account);
        setState({ account: {}, error: {}});
    }
    return (
        <>
            <div className="container">
                <div className="form-wrapper">
                    <h1>Account Signup</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName"
                            value={account.firstName || ''}
                            placeholder="Enter First Name"
                            onChange={updateAccount}
                            className={error.firstName ? "inputError": ""}
                            noValidate />
                        {error.firstName &&
                            <span className='error'>{error.firstName}</span>}

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName"
                            value={account.lastName || '' }
                            placeholder="Enter Last Name"
                            onChange={updateAccount}
                            className={error.lastName ? "inputError" : ""}
                            noValidate/>
                        {error.lastName &&
                            <span className='error'>{error.lastName}</span>}
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                            value={account.email || '' }
                            placeholder="Enter Email"
                            onChange={updateAccount}
                            className={error.email ? "inputError" : ""}
                            noValidate />
                        {error.email &&
                            <span className='error'>{error.email}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                            value={ account.password || '' }
                            placeholder="Enter Password"
                            onChange={updateAccount}
                            className={error.password ? "inputError" : ""}
                            noValidate />
                        {error.password &&
                            <span className='error'>{error.password}</span>}
                
                        <input type="checkbox" className="check" 
                            name="userAgreement" 
                            onChange={updateAccount}
                            checked={account.userAgreement ? "checked" : ""}
                            className={error.userAgreement ? "inputError" : ""}
                            />
                            <span className="info">I agree to use a dummy data here and no liability for the website owner</span>
                        {error.userAgreement &&
                            <span className='error'>{error.userAgreement}</span>}
                        <button className="btn" type="submit" >Create</button>
                    </form>
                </div>  
            </div>
        </>
    );
};
