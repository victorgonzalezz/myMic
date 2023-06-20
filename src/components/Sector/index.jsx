import { useState } from "react";
import { SectorComponent } from "../SectorComponent/index";
import { TipoDeEmpresa } from "../TipoDeEmpresa/index";
import { Espacio } from "../Espacio";
import { Personas } from "../Personas";
import { Productos } from "../Productos";
import { Resultados } from "../Resultados";

import './index.css'  

// eslint-disable-next-line react/prop-types
export function Sector({ activeTab, handleTabClick }) {
  
  const [selectedSector, setSelectedSector] = useState("");

  
  const handleRadioChange = (event) => {
    setSelectedSector(event.target.value);
  };

  const tabs = [
    {
      label: "Sector",
      component: (
        <SectorComponent
          activeTab={activeTab}
          handleRadioChange={handleRadioChange}
          selectedSector={selectedSector}
        />
      ),
    },
    {
      label: "Tipo de empresa",
      component: <TipoDeEmpresa activeTab={activeTab} />,
    },
    {
      label: "Espacio",
      component: <Espacio activeTab={activeTab} />,
    },
    {
      label: "Personas",
      component: <Personas activeTab={activeTab} />,
    },
    {
      label: "Productos",
      component: <Productos activeTab={activeTab} />,
    },
    {
      label: "Resultados",
      component: <Resultados activeTab={activeTab} />,
    },
  ];
  return (
    <>
      <ul
        className="nav nav-pills d-flex justify-content-center col-sm-12 mb-2"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item d-flex" role="presentation">
          {tabs.map(({ label }) => (
            <button
              key={label}
              className={`nav-link active ${
                activeTab === label ? "active" : ""
              } ${activeTab === label ? "custom-active" : ""}`}
              id={`pills-${label.toLowerCase().replace(" ", "-")}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#pills-${label.toLowerCase().replace(
                " ",

                "-"
              )}`}
              type="button"
              role="tab"
              aria-controls={`pills-${label.toLowerCase().replace(" ", "-")}`}
              aria-selected={activeTab === label}
              onClick={() => handleTabClick(label)}
            >
              {label}
            </button>
          ))}
        </li>
      </ul>

      <div
        className="tab-content d-flex justify-content-center col-sm-10 m-4"
        id="pills-tabContent"
      >
        {tabs.map(({ label, component }) => (
          <div
            key={label}
            className={`tab-pane fade show ${
              activeTab === label ? "active" : ""
            }`}
            id={`pills-${label.toLowerCase().replace(" ", "-")}`}
            role="tabpanel"
            aria-labelledby={`pills-${label.toLowerCase().replace(
              " ",

              "-"
            )}-tab`}
          >
            {component}
          </div>
        ))}
      </div>
    </>
  );
}
