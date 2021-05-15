import React from "react";
import "../styles/headerFilter.css";
import logo from "../assets/star-solid.svg";
const HeaderFilter = ({ filter, setFilter }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setFilter({
      ...filter,
      isEnabled: true,
      filteredList: filter.list.filter((item) =>
        item.title.toLowerCase().includes(filter.word.toLowerCase())
      ),
    });

    console.log(filter.filteredList);
  };
  const onChange = (e) => {
    setFilter({
      ...filter,
      word: e.target.value,
    });
    if (e.target.value === "") {
      setFilter({
        ...filter,
        isEnabled: false,
        word: "",
      });
    }
  };
  return (
    <div className="flex-header ">
      <img src={logo} className="img-logo-header" alt="bg" />
      <div className="search-flex">
        <form onSubmit={onSubmit}>
          <input type="search" value={filter.word} onChange={onChange} />
          <button className="fa fa-search"> </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderFilter;
