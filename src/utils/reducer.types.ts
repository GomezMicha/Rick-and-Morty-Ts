import { createAction, Action, ActionWithPayload} from "./reducer.utils";


export interface Character {
  id: number; 
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export type CharactersObject = {
  results: any,
}

export interface CharactersInfo {
   charactersInfo: Character[],
  }


export enum actions {
    FETCH_DATA_START = "FETCH_DATA_START",
    FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
    SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  }
  
  export type SetSearchField = ActionWithPayload<actions.SET_SEARCH_QUERY, string>;
  
  export type FetchDataStart = Action<actions.FETCH_DATA_START>;
  export type FetchDataSuccess = ActionWithPayload<actions.FETCH_DATA_SUCCESS, CharactersInfo[]>;
  export type FetchDataFailure = ActionWithPayload<actions.FETCH_DATA_FAILURE, Error>;
  
  
  
  // Action Creators
  
  export const setSearchField = (queryString: string): SetSearchField =>
    createAction(actions.SET_SEARCH_QUERY, queryString);
  
  export const fetchDataStart = (): FetchDataStart =>
    createAction(actions.FETCH_DATA_START);
  
  export const fetchDataSuccess = (characterArray: CharactersInfo[]): FetchDataSuccess =>
    createAction(actions.FETCH_DATA_SUCCESS, characterArray);
  
  export const fetchDataFailure = (errorMessage: Error): FetchDataFailure =>
    createAction(actions.FETCH_DATA_FAILURE, errorMessage);
  
//  Type for validation of action creators
  export type actiontypes =
    | SetSearchField
    | FetchDataStart
    | FetchDataSuccess
    | FetchDataFailure