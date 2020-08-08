import React, { SelectHTMLAttributes, CSSProperties } from 'react';

import './styles.css';
import { useState } from 'react';

interface SelectProps {
    name: string
    label: string;
    options: {
        value: string;
        label: string;
    }[];
    value: string;
    onChange(value: string): void
    defaultValue?: string;
}

const Select: React.FC<SelectProps> = ({ name, label, options, value, onChange }) => {

    const [selectedOption, setSelectedOption] = useState('Selecione');
    const [isCheched, setIsCheched] = useState(false);

    function handleChangeOption(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        console.log(e.currentTarget);

        const { innerHTML } = e.currentTarget;
        const { value } = e.currentTarget.dataset;

        setSelectedOption(innerHTML);
        onChange(value as string);

        handleChangeChecked();
    }

    function handleChangeChecked() {
        setIsCheched(!isCheched);
    }

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <div className="select">
                <input type="checkbox" id={name} checked={isCheched} onChange={handleChangeChecked} />
                <label
                    htmlFor={name}
                    style={isCheched ? { borderBottomLeftRadius: 0 + 'rem', borderBottomRightRadius: 0 + 'rem' } as CSSProperties : { borderRadius: 0.8 + 'rem' } as CSSProperties}
                >
                    {selectedOption}
                </label>
                <div className="options">
                    {options.map((option) => (

                        <div

                            onClick={(e) => handleChangeOption(e)}
                            data-value={option.value}
                        >
                            {option.label}
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Select;