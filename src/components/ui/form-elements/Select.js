import React from 'react';

const Select = ({name, div, children}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
            <select name={name} className="form-select">
                {children}
            </select>
        </div>
     );
}
 
export default Select;
