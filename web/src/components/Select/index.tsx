import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string;
    options: {
        value: string;
        label: string;
    }[];
    defaultValue?:string;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} value="DEFAULT" {...rest}>
                <option value="DEFAULT" disabled hidden>Selecione uma opção</option>
                {
                    options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Select;