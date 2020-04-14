import React , { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import useForm from './hooks/useForm';
import validate from '../validations';
import { navigate } from '@reach/router';

export default function Account() {
    const { createAccount } = useContext(GlobalContext);
    let account = {},
        error = {};
    const callback = async () => {
        console.log("===========callback=====");
        createAccount(account);
        await navigate(`/modal`);
    };

    const { handleSubmit, handleChange, handleCheckbox, values, errors } = useForm(callback, validate);
    account = values;
    error = errors;
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
                            onChange={handleChange}
                            className={`${error.firstName && 'inputError'}`}
                            noValidate />
                        {error.firstName &&
                            <span className='error'>{error.firstName}</span>}

                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName"
                            value={account.lastName || '' }
                            placeholder="Enter Last Name"
                            onChange={handleChange}
                            className={`${error.lastName && 'inputError'}`}
                            noValidate/>
                        {error.lastName &&
                            <span className='error'>{error.lastName}</span>}
                        
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                            value={account.email || '' }
                            placeholder="Enter Email"
                            onChange={handleChange}
                            className={`${error.email && 'inputError'}`}
                            noValidate />
                        {error.email &&
                            <span className='error'>{error.email}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                            value={ account.password || '' }
                            placeholder="Enter Password"
                            onChange={handleChange}
                            className={`${error.password && 'inputError'}`}
                            noValidate />
                        {error.password &&
                            <span className='error'>{error.password}</span>}
                
                        <input type="checkbox" 
                            name="userAgreement" 
                            onChange={handleCheckbox}
                            checked={account.userAgreement ? 'checked' : ''}
                            className={`check ${error.userAgreement && 'inputError'}`}
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
