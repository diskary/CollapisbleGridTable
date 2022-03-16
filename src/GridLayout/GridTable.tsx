import Column from "./Column";
import Row from "./Row";

import style from "./GridTable.module.scss";

type Props = {
  columns: Array<any>,
  rows: Array<any>
};

export default function GridTable({ columns, rows }: Props) {
  const columns = [
    {
      fields: "date",
      headerName: "Globales"
    },
    {
      fields: "inprogress",
      headerName: "En cours"
    },
    {
      fields: "unsigned",
      headerName: "Finalisées non signées"
    },
    {
      fields: "signed",
      headerName: "Finalisées signées"
    },
    {
      fields: "action",
      headerName: "",
      renderCell: Action
    }
  ];
  const rows = [
    {
      total: {
        id: 0,
        date: "12/01/2022",
        inprogress: "25",
        unsigned: "2",
        signed: "10",
        action: "Afficher le détail"
      },
      detail: {
        isShow: true,
        data: [
          {
            id: 1,
            date: "11/01/2022",
            inprogress: "5",
            unsigned: "1",
            signed: "7"
          },
          {
            id: 2,
            date: "10/01/2022",
            inprogress: "6",
            unsigned: "1",
            signed: "2"
          },
          {
            id: 3,
            date: "09/01/2022",
            inprogress: "14",
            unsigned: "0",
            signed: "1"
          }
        ]
      }
    },
    {
      total: {
        id: 0,
        date: "12/01/2022",
        inprogress: "25",
        unsigned: "2",
        signed: "10",
        action: "Afficher le détail"
      },
      detail: {
        isShow: true,
        data: [
          {
            id: 1,
            date: "11/01/2022",
            inprogress: "5",
            unsigned: "1",
            signed: "7"
          },
          {
            id: 2,
            date: "10/01/2022",
            inprogress: "6",
            unsigned: "1",
            signed: "2"
          },
          {
            id: 3,
            date: "09/01/2022",
            inprogress: "14",
            unsigned: "0",
            signed: "1"
          }
        ]
      }
    }
  ];

  return (
    <div className={style.Grid}>
      <Column items={columns} />
      {rows.map((ele, key) => (
        <Row key={key} row={ele} columns={columns} />
      ))}
    </div>
  );
}

function Action({ params }) {
  const handleClick = () => {
    params.click();
  };
  return <button onClick={handleClick}>Afficher le détail</button>;
}
