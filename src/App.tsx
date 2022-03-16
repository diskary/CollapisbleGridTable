import Grid from "./Grid";
import GridTable from "./GridTable";
import "./styles.css";

export default function App() {
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
    <>
      <Grid />
      <GridTable columns={columns} rows={rows} />
    </>
  );
}

type ActionType = {
  value: string | number;
  items: any;
  click: () => void;
};

type Props = {
  params: ActionType;
};

function Action({ params }: Props) {
  const handleClick = () => {
    params.click();
  };
  return <button onClick={handleClick}>Afficher le détail</button>;
}
