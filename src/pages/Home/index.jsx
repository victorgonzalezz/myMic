import { GeneralTabs } from "../../components/GeneralTabs"
import "./index.css"

// eslint-disable-next-line react/prop-types
export function Home({ handleTabClick, activeTab }) {
  const handleNextTab = () => {
    if (activeTab === "GeneralTabs") {
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
  const handlePrevTab = () => {
    if (activeTab === "Resultados") {
      handleTabClick("Productos");
    } else if (activeTab === "Productos") {
      handleTabClick("Personas");
    } else if (activeTab === "Personas") {
      handleTabClick("Espacio");
    } else if (activeTab === "Espacio") {
      handleTabClick("Tipo de empresa");
    } else if (activeTab === "Tipo de empresa") {
      handleTabClick("GeneralTabs");
    }
  };

 
  return (
    <>
      <GeneralTabs activeTab={activeTab} handleTabClick={handleTabClick} />
        <hr className="custon__hr"/>
      <div className="home__button">
        <button
          id="volver__button"
          onClick={handlePrevTab}
          disabled={activeTab === "GeneralTabs"}
        >
          Volver
        </button>

        <button
          id="siguiente__button"
          className="disabled"
          onClick={handleNextTab}
          disabled={activeTab === "Resultados"}

        >
          Seguiente
        </button>
      </div>
    </>
  );
}
