

import PeopleActions from "../flux/stores/peopleActions"
import PeopleStore from "../flux/stores/peopleStore"
import {Container} from 'flux/utils';
import AppView from "../App"
function getStores() {
  return [
    PeopleStore,
  ];
}
function getState() {
  return {
    people: PeopleStore.getState().data,
    selectedIndex: PeopleStore.getState().selectedIndex,
    filteredData: PeopleStore.getState().filteredData,
    filtering : PeopleStore.getState().filtering,

    onAddPerson: PeopleActions.addPerson,
    onRemovePerson: PeopleActions.removePerson,
    onEditPerson: PeopleActions.editPerson,
    onSetIndex: PeopleActions.setIndex,
    onSortBy: PeopleActions.sortBy,
    onFilterList: PeopleActions.filterList,
    onResetFilter : PeopleActions.resetFilter
  };
}
export default Container.createFunctional(AppView, getStores, getState);

