import React from "react";
import RenderCell from "./RenderCell";
import style from "./GridTable.module.scss";

const classNames = require("classnames");

type PropsCell = {
  items: Array<any>;
  columns: Array<any>;
  handleShowDetail?: () => void;
};

export default function Cell({ items, columns, handleShowDetail }: PropsCell) {
  return (
    <div className={classNames(style.ItemRow, style.TableGrid)}>
      {columns.map((ele, index) => (
        <>
          {items[ele.fields] && (
            <RenderCell
              columnItem={ele}
              cellItem={items[ele.fields]}
              items={items}
              handleShowDetail={handleShowDetail}
            />
          )}
        </>
      ))}
    </div>
  );
}
