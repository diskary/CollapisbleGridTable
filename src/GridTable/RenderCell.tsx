type Props = {
  columnItem: any;
  cellItem: string | number;
  items: any;
  handleShowDetail: () => void;
};

export default function RenderCell({
  columnItem,
  cellItem,
  items,
  handleShowDetail
}: Props) {
  let Action = "";
  if (columnItem.renderCell) {
    Action = columnItem.renderCell;
  }
  const handleClick = () => {
    handleShowDetail();
  };
  return (
    <>
      {!columnItem.renderCell ? (
        <span>{cellItem}</span>
      ) : (
        <Action params={{ value: cellItem, items, click: handleClick }} />
      )}
    </>
  );
}
