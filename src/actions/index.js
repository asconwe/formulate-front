/*
 * action types
 */

export const SET_VALUE_OF_ELEMENT = 'SET_VALUE_OF_ELEMENT';

/*
 * other constants
 */
//=== Not used presently
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


export function setValueOfElement(text, id) {
  return { type: SET_VALUE_OF_ELEMENT, text, id }
}


// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }