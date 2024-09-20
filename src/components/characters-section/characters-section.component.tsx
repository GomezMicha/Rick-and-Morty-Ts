import { FC } from "react";
import "./characters-section.style.css";

import CharactersHeader from "../characters-header/characters-header.component";

import CharactersCard from "../characters-card/characters-card.component";
import Button from "../button/button.component";
import { STATE } from "../../utils/AppReducer";


const CharactersSection: FC<STATE> = ({characterInfo, searchField}): JSX.Element => {

  const sortZtoA = () => {
    console.log("called")
    return characterInfo
  .sort( (character, nextCharacter) => (character.name < nextCharacter.name) ? 1 : -1 );
  }

  const sortAtoZ = () => {
    console.log("called")
    return characterInfo
  .sort( (character, nextCharacter) => (character.name > nextCharacter.name) ? 1 : -1 );
  }
  
  return (
    <div className="characters-section">
      <div className="characters">
      <CharactersHeader title="CHARACTERS" num={7}/>
      { characterInfo
      .filter((character) => character.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
      .filter( ( char, idx) => idx < 7)
      .map( ( character) =>(
        <CharactersCard 
        key={character.id} 
        name={character.name} 
        species={character.species} 
        image={character.image}/>
      ) )}
      </div>
    </div>
  );
};

export default CharactersSection;
;