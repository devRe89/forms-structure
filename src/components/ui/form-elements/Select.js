import React from 'react';

const Select = ({name, div, label, children, ...rest}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
            {label ? <label className="form-label">{label}</label> : null}
            <select 
                name={name} 
                {...rest}
            >
                {children}
            </select>
        </div>
     );
}
 
export default Select;
