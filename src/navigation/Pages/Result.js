import React from "react";
import List from "../../components/List";
import Search from "../../components/Search";

export default function Result() {
  return (
    <div className="detail">
      <Search top={true}/>
      <List />
    </div>
  );
}
