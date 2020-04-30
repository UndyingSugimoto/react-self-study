import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

type SearchProps = {
  search: Function;
};

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const resetInputField = (): void => {
    setSearchValue("");
  };

  const callSearchFunction = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <StyledSearch>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </StyledSearch>
  );
};

const StyledSearch = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;

  & input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }

  & input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }

  & > input[type="text"] {
    width: 40%;
    min-width: 170px;
  }
`;

export default Search;
