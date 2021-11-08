import React from 'react';

const Input = ({label, div, radioElements, ...rest}) => {

    if ( radioElements ) return (
        <>
        <label className="form-label">{label}</label> <br></br>
        {radioElements.map(radio => (
            <div key={radio.value} className={`form-check form-check-inline mb-4 ${div ? div :''}`}>
                <input 
                    id={`label-${radio.text}`}
                    value={radio.value}
                    {...rest}
                /> 
                <label className="form-check-label" htmlFor={`label-${radio.text}`}>
                    {radio.text}
                </label>
            </div>
        ))}
        </>
    );

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
