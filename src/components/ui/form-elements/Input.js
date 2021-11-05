import React from 'react';

const Input = ({label, div, ...rest}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
            <label className="form-label">{label}</label>
            <input 
                {...rest}
            />
        </div>
    );
}
 
export default Input;
