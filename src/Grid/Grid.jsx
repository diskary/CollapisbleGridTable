export default function Grid() {
  return (
    <>
      <div className="column">
        <div style={{ width: "180px" }}>GLOBALES</div>
        <div style={{ width: "180px" }}>EN COURS</div>
        <div style={{ width: "180px" }}>FINALISEES NON SIGNEES</div>
        <div style={{ width: "210px" }}>FINALISEES SIGNEES</div>
        <div style={{ width: "210px" }}></div>
      </div>
      <div className="row">
        <div className="row-item">Total au 12/01/2022</div>
        <div className="row-item">25</div>
        <div className="row-item">2</div>
        <div className="row-item">10</div>
        <div>
          <a href="/">Afficher le détail</a>
        </div>
      </div>
    </>
  );
}
