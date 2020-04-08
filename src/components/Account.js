import React , { useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Account() {
    const { createAccount } = useContext(GlobalContext);
    const [ account, setAccount] = useState({});
    const updateAccount = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = {
            firstName: account.firstName,
            lastName: account.lastName,
            email: account.email,
            password: account.password,
            userAgreement: true
        };
        createAccount(newAccount);
        setAccount({});
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>Account Signup</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" 
                        placeholder="Enter First Name"
                        onChange= { updateAccount } 
                        noValidate />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName"
                        placeholder="Enter Last Name"
                        onChange={updateAccount}
                        noValidate />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"
                        value={account.email}
                        placeholder="Enter Email"
                        onChange={updateAccount}
                        noValidate />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                        value={account.password}
                        placeholder="Enter Password"
                        onChange={updateAccount}
                        noValidate />
                    <input type="checkbox" className="check" name="agree" /><span> Please use some dummy data becaue it is a sample application</span>
                    <button className="btn" type="submit">Create</button>
                </form>
            </div>  
        </div>
    );
};
