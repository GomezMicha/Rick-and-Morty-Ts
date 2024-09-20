import { FC} from "react";
import "./characters-header.style.css"

type HeaderProps = {
  title: string,
  num: number
}

const CharactersHeader: FC<HeaderProps> = ({ title, num}): JSX.Element => {
  return (
    <div className="characters-header">
      <div className="characters-title">
        <h2>{title} ({num}) </h2>
      </div>
    </div>
  );
};

export default CharactersHeader;