// eslint-disable-next-line react/prop-types
export function Personas({ activeTab }) {
  return (
    <div
      className={`tab-pane fade show ${
        activeTab === "personas" ? "active" : ""
      }`}
      id="pills-personas"
      role="tabpanel"
      aria-labelledby="pills-personas-tab"
    >
      <p>¿Con quantas personas te gustaria estar?</p>
    </div>
  );
}
