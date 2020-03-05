import React from "react";
import Person from "./Person/Person.js"
const PersonList = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(props.people[0]).map(k => {
                    return (<th className="clickAble" key={Math.random()} onClick={() => props.onSortBy(k)}>{k}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {props.filtering ?  props.filteredData.map((person,i) => {
                    return <Person person={person} key={i} onClick={() => props.onSetIndex(i)}></Person>
                })
                :  props.people.map((person,i) => {
                    return <Person person={person} key={i} onClick={() => props.onSetIndex(i)}></Person>
                })}
            </tbody>
        </table>
    )
}
export default PersonList