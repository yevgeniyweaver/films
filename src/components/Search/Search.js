import React, { useState, useRef } from "react";
import InputRef from  "./inputRef";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchForm, setSearchForm] = useState({ title: '', type: ''});
  const countRef = useRef('');

  const handleInputChanges = (e) => {
    console.log(e.target.value);
    //setSearchValue(e.target.value);
    // setSearchValue(prevState => prevState + 1);
    setSearchForm({
      ...searchForm,
      [e.target.name]: e.target.value
    });
    console.log(searchForm)
  }
  const handleCountRef = () => {
    setTimeout(()=>{
      console.log(countRef.current.value);
    }, 1000)
  }
  // const resetInputField = () => {
  //   setSearchValue("")
  // }
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    // resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchForm.title}
        onChange={handleInputChanges}
        name="title"
        type="text"
      />
      <input
        value={searchForm.type}
        name="type"
        onChange={handleInputChanges}
        type="text"
      />
      {/*<input*/}
      {/*  ref={countRef}*/}
      {/*  onChange={handleCountRef}*/}
      {/*  type="text"*/}
      {/*/>*/}
      {/*<InputRef/>*/}
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;
