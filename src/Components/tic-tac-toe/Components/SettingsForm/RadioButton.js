import React from "react";


function RadioButton({onChange, checked, name, value}) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name={name} id={value} value={value} onChange={onChange} checked={checked===value}/>
            <label className="form-check-label" htmlFor={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</label>
        </div>
    );
}

export default RadioButton