import React from 'react';

const Select = ({name, div, children, ...rest}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
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
