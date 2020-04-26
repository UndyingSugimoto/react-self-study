import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

type SearchProps = {
  search: Function;
};

const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
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
