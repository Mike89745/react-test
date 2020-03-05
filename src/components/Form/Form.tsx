import React,{useState} from "react";
import { sex } from "../../utils/enums/sex";
import person from "../../utils/classes/person";
const PersonForm = (props : any) => {
    const [FormState,setFormState] = useState({name: "",age: 1, sex: sex.F,currentIndex: -1})
    if(props.selectedIndex !== -1 && FormState.currentIndex !== props.selectedIndex){
        setFormState({...props.people[props.selectedIndex],currentIndex: props.selectedIndex});
    }
    const checkForm = () => {
        return FormState.name.length >= 2 && FormState.name.length <= 10 && /^[a-zA-Z]+$/.test(FormState.name) && FormState.age > 0 && FormState.age < 128
    }
    const addPerson = () => {
        if(checkForm()){
            let date = new Date(Date.now()).toISOString()
            if( props.selectedIndex === -1) props.onAddPerson(new person(FormState.name,FormState.age,FormState.sex,date));
            if( props.selectedIndex < props.people.length) props.onEditPerson(new person(FormState.name,FormState.age,FormState.sex,date));
            setFormState({name: "",age:1, sex: sex.F,currentIndex: -1});
            props.onSetIndex(-1);
        }

    }
    const updateField = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=> {
        setFormState({
          ...FormState,
          [e.target.name]: e.target.value
        });
      };
    return (
        <div className="mt-5">
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Name<input value={FormState.name} onChange={updateField}  name="name"></input></label>
                <label>age<input value={FormState.age} onChange={updateField}  name="age" type="number" min="1" max="128"></input></label>
                <label>sex
                    <select value={FormState.sex} onChange={updateField} name="sex">
                        {Object.keys(sex).map(k =>{
                            return <option value={k} key={k}>{sex[k]}</option>
                        })}
                    </select>
                </label>
                <button className="btn-primary" onClick={() => addPerson()}>{FormState.currentIndex !== -1 ? "edit" : "submit"}</button>
                <button className="btn-primary" onClick={() => props.onFilterList(FormState.name,FormState.age,FormState.sex)}>filter</button>
                <button className="btn-primary" onClick={() => props.onResetFilter()}>reset filter</button>
            </form>
        </div>
    )
}
export default PersonForm