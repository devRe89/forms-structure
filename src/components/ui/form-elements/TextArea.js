import React from 'react';

const TextArea = ({label, div, ...rest}) => {
    return ( 
        <div className="form-outline mb-4">
            <label className="form-label">{label}</label>
            <textarea 
                {...rest}
            ></textarea>
        </div>
    );
}
 
export default TextArea;
