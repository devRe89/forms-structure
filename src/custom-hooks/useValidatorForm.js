import React, { useState } from 'react';

const useValidatorFrom = (initialState) => {
    const [state, setState] = useState(initialState);

    const handlerChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return [state, handlerChange];
}
 
export default useValidatorFrom;