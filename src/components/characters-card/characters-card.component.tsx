import { FC } from "react";
import "./characters-card.style.css"

import { Character } from "../../utils/reducer.types";

const CharactersCard: FC<Character> = ( { name, species, image}): JSX.Element => {

  return (
    <div className="characters-card-wrapper">
      
      <div className="characters-card-container">
       <div className="avatar-image">
        <img src={image} alt={``} />
       </div>
        <div className="text-wrapper">
         <h3>{name}</h3>
         <p>{species}</p>
        </div>
        <div className="favorite-icon"></div>
      </div>
    </div>
  );
};

export default CharactersCard;