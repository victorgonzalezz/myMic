// eslint-disable-next-line react/prop-types
export function Espacio({ activeTab }) {
  return (
    <div
      className={`tab-pane fade show ${
        activeTab === "espacio" ? "active" : ""
      }`}
      id="pills-espacio"
      role="tabpanel"
      aria-labelledby="pills-espacio-tab"
    >
      <p>¿Como te gustaria tener tu espacio?</p>
    </div>
  );
}
