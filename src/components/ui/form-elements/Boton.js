import React from 'react';

const Boton = ({title, div, ...rest}) => {
    return ( 
        <div className={`form-outline mb-4 ${div ? div :''}`}>
        <button 
            {...rest}
        >{title}</button>
        </div>
    );
}
 
export default Boton;
