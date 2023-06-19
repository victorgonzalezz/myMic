
const sectorOptions = [
  { id: "alojamiento", label: "Alojamientos" },
  { id: "apoyo", label: "Servicios administrativos y de apoyo" },
  { id: "artes", label: "Artes, Entretenimiento y Recreación" },
  { id: "construccion", label: "Construcción" },
  { id: "educativos", label: "Servicios Educativos" },
  { id: "finanzas", label: "Finanzas y Seguros" },
  { id: "alimentos", label: "Servicios de Alimentos y Bebidas" },
  { id: "salud", label: "Cuidado de la Salud" },
  { id: "informacion", label: "Información" },
  { id: "gestion", label: "Gestión de Empresas" },
  { id: "fabricacion", label: "Fabricación" },
  { id: "inmobiliaria", label: "Inmobiliaria" },
  { id: "alquiler", label: "Alquiler y Leasing" },
];

// eslint-disable-next-line react/prop-types
export function SectorComponent({ activeTab, handleRadioChange, selectedSector }) {
  return (
    <div
      className={`tab-pane fade show ${activeTab === "Sector" ? "active" : ""}`}
      id="pills-sector"
      role="tabpanel"
      aria-labelledby="pills-sector-tab"
    >
      <p>¿Cuál de los siguientes sectores describe mejor su tipo de negocio?</p>

      <div className="radio__container">
        {sectorOptions.map((option) => (
          <div key={option.id}>
            <input
              className=""
              type="radio"
              id={option.id}
              name="drone"
              value={option.id}
              onChange={handleRadioChange}
              checked={option.id === selectedSector}
            />
            <label className="radio__container-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
