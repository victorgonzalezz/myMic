// eslint-disable-next-line react/prop-types
export function Resultados({ activeTab }) {
  return (
    <div
      className={`tab-pane fade show ${
        activeTab === "resultados" ? "active" : ""
      }`}
      id="pills-resultados"
      role="tabpanel"
      aria-labelledby="pills-resultados-tab"
    >
      <p>¿Cuál tipo de negocio describe su empresa?</p>
    </div>
  );
}
