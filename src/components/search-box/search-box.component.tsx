import { ChangeEventHandler, FC } from "react";
import { SearchBoxInput} from "./search-box.style";

type props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox: FC<props> = ({ handleChange }): JSX.Element => {
  return (
    <SearchBoxInput
      className="search-box"
      type="search"
      placeholder="Search or filter results"
      onChange={handleChange}

    />
  );
};

export default SearchBox;