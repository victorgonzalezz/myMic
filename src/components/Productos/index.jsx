// eslint-disable-next-line react/prop-types
export function Productos({ activeTab }) {
  return (
    <div
      className={`tab-pane fade show ${
        activeTab === "productos" ? "active" : ""
      }`}
      id="pills-productos"
      role="tabpanel"
      aria-labelledby="pills-productos-tab"
    >
      <p>¿Como te gustaria tener tu espacio?</p>
    </div>
  );
}
