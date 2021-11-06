import React from 'react';

const Select = ({name, div, children, ...rest}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
            <select 
                name={name} 
                className="form-select"
                {...rest}
            >
                {children}
            </select>
        </div>
     );
}
 
export default Select;
