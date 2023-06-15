import { useState } from "react";
import "./index.css";


export function Home() {
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
            className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected={activeTab === "profile"}
            onClick={() => handleTabClick("profile")}
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
            <div>
              <input
                type="radio"
                id="alojamiento"
                name="drone"
                value="alojamiento"
                onChange={""}
              />
              <label for="alojamiento">Alojamientos</label>
            </div>

            <div>
              <input type="radio" id="apoyo" name="drone" value="apoyo" />
              <label for="apoyo">Servicios administrativos y de apoyo</label>
            </div>

            <div>
              <input type="radio" id="artes" name="drone" value="artes" />
              <label for="artes">Artes, Entretenimiento y Recreación</label>
            </div>
            <div>
              <input
                type="radio"
                id="construccion"
                name="drone"
                value="construccion"
              />
              <label for="construccion">Construcción</label>
            </div>
            <div>
              <input
                type="radio"
                id="educativos"
                name="drone"
                value="educativos"
              />
              <label for="educativos">Servicios Educativos</label>
            </div>
            <div>
              <input type="radio" id="finanzas" name="drone" value="finanzas" />
              <label for="finanzas">Finanzas y Seguros</label>
            </div>
            <div>
              <input
                type="radio"
                id="alimentos"
                name="drone"
                value="alimentos"
              />
              <label for="alimentos">Servicios de Alimentos y Bebidas</label>
            </div>
            <div>
              <input type="radio" id="salud" name="drone" value="salud" />
              <label htmlFor="salud">Cuidado de la Salud</label>
            </div>
            <div>
              <input
                type="radio"
                id="informaction"
                name="drone"
                value="informaction"
              />
              <label htmlFor="informaction">Información</label>
            </div>
            <div>
              <input type="radio" id="gestion" name="drone" value="gestion" />
              <label htmlFor="gestion">Gestión de Empresas</label>
            </div>
            <div>
              <input
                type="radio"
                id="fabricacion"
                name="drone"
                value="fabricacion"
              />
              <label for="fabricacion">Fabricación</label>
            </div>
            <div>
              <input
                type="radio"
                id="imobiliaria"
                name="drone"
                value="imobiliaria"
              />
              <label for="imobiliaria">Imobiliaria</label>
            </div>
            <div>
              <input type="radio" id="alquiler" name="drone" value="alquiler" />
              <label for="alquiler">Alquiler y Leasing</label>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade show ${
            activeTab === "profile" ? "active" : ""
          }`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <p>
            ¿Cuál tipo de negócio usted describe su empresa?
          </p>
        </div>
      </div>
    </>
  );
}
