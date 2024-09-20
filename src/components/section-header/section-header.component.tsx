import { FC } from "react";
import "./section-header.style.css";

import { OptionalProperty } from "../../utils/reducer.utils";



const SectionHeader: FC<OptionalProperty> = (): JSX.Element => {
  return (
    <header className="header">
      <h1>Rick and Morty List</h1>
    </header>
  );
};

export default SectionHeader;