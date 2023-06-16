import { useState } from "react";

const sectorOptions = [
  { id: "alojamiento", label: "Alojamientos" },
  { id: "apoyo", label: "Servicios administrativos y de apoyo" },
  { id: "artes", label: "Artes, Entretenimiento y Recreación" },
  { id: "construccion", label: "Construcción" },
  { id: "educativos", label: "Servicios Educativos" },
  { id: "finanzas", label: "Finanzas y Seguros" },
  { id: "alimentos", label: "Servicios de Alimentos y Bebidas" },
  { id: "salud", label: "Cuidado de la Salud" },
  { id: "informaction", label: "Información" },
  { id: "gestion", label: "Gestión de Empresas" },
  { id: "fabricacion", label: "Fabricación" },
  { id: "imobiliaria", label: "Imobiliaria" },
  { id: "alquiler", label: "Alquiler y Leasing" },
];


export function Sector() {
   const [activeTab, setActiveTab] = useState("sector");

   const handleTabClick = (tab) => {
     setActiveTab(tab);
   };
  return (
    <>
      <ul
        className="nav nav-pills d-flex justify-content-center col-sm-8 mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === "sector" ? "active" : ""}`}
            id="pills-sector-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-sector"
            type="button"
            role="tab"
            aria-controls="pills-sector"
            aria-selected={activeTab === "sector"}
            onClick={() => handleTabClick("sector")}
          >
            Sector
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "tipo-empresa" ? "active" : ""
            }`}
            id="pills-tipo-empresa-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tipo-empresa"
            type="button"
            role="tab"
            aria-controls="pills-tipo-empresa"
            aria-selected={activeTab === "tipo-empresa"}
            onClick={() => handleTabClick("tipo-empresa")}
          >
            Tipo de empresa
          </button>
        </li>
      </ul>

      <div
        className="tab-content d-flex justify-content-center col-sm-10 m-2"
        id="pills-tabContent"
      >
        <div
          className={`tab-pane fade show ${
            activeTab === "sector" ? "active" : ""
          }`}
          id="pills-sector"
          role="tabpanel"
          aria-labelledby="pills-sector-tab"
        >
          <p>
            ¿Cuál de los siguintes sectores describe mejor su tipo de negócio?
          </p>

          <div className="radio__container">
            {sectorOptions.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  id={option.id}
                  name="drone"
                  value={option.id}
                  // onChange={handleRadioChange}
                />
                <label className="radio__container-label" htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`tab-pane fade show ${
            activeTab === "tipo-empresa" ? "active" : ""
          }`}
          id="pills-tipo-empresa"
          role="tabpanel"
          aria-labelledby="pills-tipo-empresa-tab"
        >
          <p>¿Cuál tipo de negócio usted describe su empresa?</p>
        </div>
      </div>
    </>
  );
}
