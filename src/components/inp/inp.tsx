import React from "react";

export function Inp(props) {
    return (
        <div className="inp">
            {props.type === 'text' && (
                <>
                    <input name={props.name} className="input-find" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor={props.name} className="placeholder">{props.placeholder}</label>
                </>
            )}
            {props.type === 'select' && (
                <select className="input-find">
                    <option value="" disabled selected>{props.placeholder}</option>
                    {props.options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            )}
        </div>
    );
}