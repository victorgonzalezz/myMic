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
  { id: "informacion", label: "Información" },
  { id: "gestion", label: "Gestión de Empresas" },
  { id: "fabricacion", label: "Fabricación" },
  { id: "inmobiliaria", label: "Inmobiliaria" },
  { id: "alquiler", label: "Alquiler y Leasing" },
];

// eslint-disable-next-line react/prop-types
export function Sector({ question, answer }) {
  const [selectedAnswerSector, setSelectedAnswerSector] = useState("");

  return (
    <div
      className={`tab-pane fade show`}
      id="pills-sector"
      role="tabpanel"
      aria-labelledby="pills-sector-tab"
    >
       <p>{question}</p>
      <fieldset>
        {answer.map(({ id, text }) => (
          <div key={id}>
            <input
              type="radio"
              id={id}
              name={question}
              value={text}
              checked={selectedAnswerSector === text}
              onChange={() => setSelectedAnswerSector(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
