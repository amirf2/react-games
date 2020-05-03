import React from "react";
import RadioButton from "./RadioButton"

function Category({onChange, checked, name, label, data}) {
    const radioButtons = data.map((value,index) => <RadioButton key={index} name={name} value={value} onChange={onChange} checked={checked} />);
    return (
        <div className="d-flex justify-content-center mt-3 mb-3">
        <div className="mr-4"><strong>{label}</strong></div>
            {radioButtons}
        </div>
    )
}

export default Category;