import PeopleActionTypes from './peopleActionTypes';
import Dispatcher from '../dispatcher';
import person from "../../utils/classes/person"
import { sex } from '../../utils/enums/sex';
const Actions = {
  addPerson(person : person) {
    Dispatcher.dispatch({
      type: PeopleActionTypes.ADD_PERSON,
      person,
    });
  },
  removePerson(person: person, index : number){
    Dispatcher.dispatch({
        type: PeopleActionTypes.REMOVE_PERSON,
        person,index
    });
  },
  editPerson(person: person) {
    Dispatcher.dispatch({
      type: PeopleActionTypes.EDIT_PERSON,
      person
    });
  },
  setIndex(index : number) {
    Dispatcher.dispatch({
      type: PeopleActionTypes.SET_INDEX,
      index
    });
  },
  sortBy(key: string) {
    Dispatcher.dispatch({
      type: PeopleActionTypes.SORT_BY,
      key
    });
  },
  filterList(name: string,age: number, sex : sex) {
    Dispatcher.dispatch({
      type: PeopleActionTypes.FILTER_LIST,
      name,age,sex
    });
  },
  resetFilter() {
    Dispatcher.dispatch({
      type: PeopleActionTypes.RESET_FILTER,
    });
  },
};

export default Actions;