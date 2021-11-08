import { useState, useEffect } from 'react';
import validateFormInputs from '../front-validations/validate-forms';

const useValidatorFrom = (initialState, fn) => {
    const [state, setState] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        if (submit) {
            if ( !Object.keys(errors).length ){
                fn();
            }
            setSubmit(false);
        }
    }, [errors, submit, fn]);
    
    const handlerChange = e => {
        console.log(e.target.type, e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }
    
    const handlerSubmit = e => {
        e.preventDefault();
        const arrayErrors = validateFormInputs(state);
        setErrors(arrayErrors);
        setSubmit(true);
    }
    
    return {
        state, 
        errors,
        handlerChange, 
        handlerSubmit,
    }
}
export default useValidatorFrom;