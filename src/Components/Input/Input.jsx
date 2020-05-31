import React, { useContext } from 'react';
import { MyContext } from '../App/App';

const Input = ({ type, onKeyDown, onChange, name, placeholder }, ref) => {
    const contextValue = useContext(MyContext);
    return (
        <>
            <div style={{ color: 'grey', fontSize: '10px' }}>
                ({contextValue})
            </div>
            <input
                ref={ref}
                type={type}
                name={name}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
            />
        </>
    );
};

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
