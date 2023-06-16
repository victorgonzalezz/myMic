
// eslint-disable-next-line react/prop-types
export function TipoDeEmpresa({ activeTab }) {
  return (
    <div
      className={`tab-pane fade show ${
        activeTab === "tipo-empresa" ? "active" : ""
      }`}
      id="pills-tipo-empresa"
      role="tabpanel"
      aria-labelledby="pills-tipo-empresa-tab"
    >
      <p>¿Cuál tipo de negocio describe su empresa?</p>
    </div>
  );
}
