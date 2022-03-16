import React, { useState } from "react";
import Cell from "./Cell";
import style from "./GridTable.module.scss";

const classNames = require("classnames");

type Props = {
  row: any;
  columns: Array<any>;
};

export default function Row({ row, columns }: Props) {
  const [me, setMe] = useState(row);

  const handleShow = () => {
    setMe((prev) => ({
      ...prev,
      detail: { ...prev.detail, isShow: !prev.detail.isShow }
    }));
  };
  const { total, detail } = me;
  return (
    <div className="Grid-row">
      <div className="main">
        <Cell items={total} columns={columns} handleShowDetail={handleShow} />
      </div>
      <div
        className={classNames(style.detail, !detail.isShow ? style.hidden : "")}
      >
        {detail.data.map((ele, index) => (
          <Cell key={index} items={ele} columns={columns} />
        ))}
      </div>
    </div>
  );
}
