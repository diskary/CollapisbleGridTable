import React from "react";
import style from "./GridTable.module.scss";
const classNames = require("classnames");

export default function Column({ items }) {
  return (
    <div className={classNames(style.GridColumn, style.GridTable)}>
      {items.map((ele, index) => (
        <span key={index}>{ele.headerName}</span>
      ))}
    </div>
  );
}
