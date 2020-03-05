import React from "react";
const Person = (props) => {
    const {person,onClick} = props;
    return (
        <tr className="clickAble" onClick={onClick}>
            {Object.keys(person).map(k => <td key={Math.random()}>{person[k]}</td>)}
        </tr>
    )
}

export default Person