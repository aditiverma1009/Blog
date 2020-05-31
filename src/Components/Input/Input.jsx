import React from 'react';

const Input = ({ type, onKeyDown, onChange, name, placeholder }, ref) => {
    return (
        <input
            ref={ref}
            type={type}
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
        />
    );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
