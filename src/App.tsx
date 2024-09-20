import {
  useReducer,
  useEffect,
  ChangeEvent,
} from "react";

import { getData } from "./utils/fetch.data";
import {CharactersObject } from "./utils/reducer.types";
import { fetchDataStart, fetchDataSuccess, fetchDataFailure, setSearchField } from "./utils/reducer.types";
import { reducer, INIT_STATE } from "./utils/AppReducer";


import SideSection from "./sections/side-section/side-section.component";
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { characterInfo, searchField} = state;

  useEffect( ()=>{
    try {
      // Start data fetching
      dispatch(fetchDataStart());

      // Fecth data and update the state
      const fetchCharacters = async () => {
        const charactersData = await getData<CharactersObject>("https://rickandmortyapi.com/api/character");
        dispatch(fetchDataSuccess(charactersData.results))
      }

      fetchCharacters();

    } catch (error: any) {
      dispatch(fetchDataFailure(error));
      console.log(error)
    }


  }, [])

// Create a handle change function to get and update searchfield state
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <>
    <SideSection characterInfo={characterInfo} searchField={searchField} handleChange={handleChange}/>
    </>
  )
}

export default App


