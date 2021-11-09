import React from "react";
import data from "./components/Data";

function ComplexList() {
  <ul>
    {data.map((item) => {
      <li>
        <div>{item.no}</div>

        <div>{item.title}</div>

        <div>{item.createDate}</div>

        <div>{item.readCount}</div>

        <div>{item.recommandationCount}</div>
      </li>;
    })}
  </ul>;
}

export default ComplexList;
