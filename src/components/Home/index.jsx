import { Sector } from "../Sector";
import "./index.css";

// eslint-disable-next-line react/prop-types
export function Home({ handleTabClick, activeTab }) {
  
  const handleNextTab = () => {
    if (activeTab === "Sector") {
      handleTabClick("Tipo de empresa");
    } else if (activeTab === "Tipo de empresa") {
      handleTabClick("Espacio");
    } else if (activeTab === "Espacio") {
      handleTabClick("Personas");
    } else if (activeTab === "Personas") {
      handleTabClick("Productos");
    } else if (activeTab === "Productos") {
      handleTabClick("Resultados");
    }
  };

 
  return (
    <>
      <Sector activeTab={activeTab} handleTabClick={handleTabClick} />
      <hr />
  
      <div className="home__button">
        <button id="volver__button">Volver</button>
        <button
          id="siguiente__button"
          className={`${activeTab === "Home" ? "active" : ""}`}
          onClick={handleNextTab}
        >
          Seguiente
        </button>
      </div>
    </>
  );
}
