import { Sector } from "../Sector";
import "./index.css";

// eslint-disable-next-line react/prop-types
export function Home({handleTabClick, activeTab}) {
  const handleNextTab = () => {
    if (activeTab === "Sector") {
      handleTabClick("Tipo de empresa");
    } else if (activeTab === "Tipo de empresa") {
      handleTabClick("Espacio");
    }
  };
 
  return (
    <>
      <Sector activeTab={activeTab} handleTabClick={handleTabClick} />
      <hr />
      <div className="home__button">
        <button
          id="button"
          className={`button ${activeTab === "Home" ? "active" : ""}`}
          onClick={handleNextTab}
        >
          Seguiente
        </button>
      </div>
    </>
  );
}
