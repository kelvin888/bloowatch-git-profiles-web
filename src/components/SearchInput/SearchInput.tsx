import { FC } from "react";
import "./SearchInput.css"

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: FC<InputProps> = ({onChange}) => {
  return <input type="text" className="search-input" onChange={(e) => onChange(e)} />;
};
