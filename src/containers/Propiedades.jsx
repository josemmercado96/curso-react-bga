import React, { useState } from "react";
import Home from "../components/Home";
import "../styles/main.css";
import { lista } from "../assets/lista";
import HeaderFilter from "../components/HeaderFilter";

const Propiedades = () => {
  const [filter, setFilter] = useState({
    list: lista,
    isEnabled: false,
    word: "",
    filteredList: [],
  });
  return (
    <div className="contenedor">
      <HeaderFilter filter={filter} setFilter={setFilter} />
      <Home
        title={"Casas en Bolivia"}
        data={filter.isEnabled ? filter.filteredList : filter.list}
      />
    </div>
  );
};

export default Propiedades;
