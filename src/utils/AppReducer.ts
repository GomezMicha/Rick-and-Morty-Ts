import {actiontypes} from "./reducer.types";
import { actions, Character } from "./reducer.types";


export interface STATE {
  readonly characterInfo: Character[];
  readonly searchField: string;
  readonly isFetching?: boolean;
  readonly errorMessage?: Error | null;
}


export const INIT_STATE: STATE = {
  characterInfo: [], 
  searchField: "",
  isFetching: false,
  errorMessage: null,
}
  

  
  export const reducer = (state = INIT_STATE, action: actiontypes) => {
    switch (action.type) {
      case actions.FETCH_DATA_START:
        return {...state, isFetching: true};
      case actions.FETCH_DATA_SUCCESS:
        return { ...state, characterInfo: action.payload, isFetching: false };
      case actions.FETCH_DATA_FAILURE:
        return {...state, errorMessage: action.payload, isFetching: false}
      case actions.SET_SEARCH_QUERY:
        return { ...state, searchField: action.payload };
      default:
        return state;
    }
  };