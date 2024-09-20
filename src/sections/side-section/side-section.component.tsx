import { FC, ChangeEventHandler } from "react";
import "./side-section.style.css";

import SectionHeader from "../../components/section-header/section-header.component";
import SearchBox from "../../components/search-box/search-box.component";
import CharactersSection from "../../components/characters-section/characters-section.component";

import { STATE } from "../../utils/AppReducer";

interface props extends STATE {
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const SideSection: FC<props> = ({ characterInfo, searchField, handleChange}): JSX.Element => {
  return (
    <div className="side-section">
      <SectionHeader />
      <SearchBox handleChange={handleChange}/>
      <CharactersSection searchField={searchField} characterInfo={characterInfo}/>
    </div>
  );
};

export default SideSection;