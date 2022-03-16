import Column from "./Column";
import Row from "./Row";

import style from "./GridTable.module.scss";

type Props = {
  columns: Array<any>;
  rows: Array<any>;
};
export default function GridTable({ columns, rows }: Props) {
  return (
    <div className={style.Grid}>
      {columns && <Column items={columns} />}
      {rows &&
        rows.map((ele, key) => <Row key={key} row={ele} columns={columns} />)}
    </div>
  );
}
