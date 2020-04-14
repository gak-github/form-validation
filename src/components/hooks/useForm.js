import { useState } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const error = validate(values);
        setErrors(error);
        if (Object.keys(values).length >0 && !(Object.keys(error).length > 0)) {
            callback();
            setValues({});
            return;
        }
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    const handleCheckbox = (event) => {
        event.persist();
        let checked = event.target.checked ? true : false;
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: checked }));
    };

    const handleRadio = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleRadio,
        handleCheckbox,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;
