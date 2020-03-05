import {ReduceStore} from 'flux/utils';
import PeopleActionTypes from './peopleActionTypes';
import Dispatcher from '../dispatcher';
import data from "../../static/data.json"
class PeopleStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return {data,selectedIndex : -1,filteredData: [],filtering: false};
  }

  reduce(state, action) {
    let tempData = [...state.data];
    switch (action.type) {
      case PeopleActionTypes.ADD_PERSON:
        tempData.push(action.person);
        return {...state,data: tempData};
      case PeopleActionTypes.REMOVE_PERSON:
        tempData.splice(action.index,1);
        return {...state,data: tempData};
      case PeopleActionTypes.EDIT_PERSON:
        tempData[state.selectedIndex] = action.person;
        return {...state,data: tempData};
      case PeopleActionTypes.SET_INDEX:
        return {...state,selectedIndex : action.index};
      case PeopleActionTypes.SORT_BY:
        if(action.key === "name") tempData.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        if(action.key === "age")  tempData.sort((a,b) => a.age - b.age);
        if(action.key === "sex")  tempData.sort((a,b) => (a.sex > b.sex) ? 1 : ((b.sex > a.sex) ? -1 : 0))
        return {...state,data : tempData};
      case PeopleActionTypes.FILTER_LIST:
        tempData = tempData.filter(person => 
          person.name.includes(action.name) && 
          person.age >= action.age && 
          person.sex === action.sex
        )
        return {...state, filteredData: tempData,filtering: true};
      case PeopleActionTypes.RESET_FILTER:
          return {...state,filtering : false};
      default:
        return {...state};
    }
  }
}

export default new PeopleStore();