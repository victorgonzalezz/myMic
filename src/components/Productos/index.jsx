import { useState } from "react";

export function Productos({ question, answer }) {
  const [selectedAnswerProductos, setSelectedAnswerProductos] = useState("");


  return (
    <div
      className={`tab-pane fade show`}
      id="pills-productos"
      role="tabpanel"
      aria-labelledby="pills-productos-tab"
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
              checked={selectedAnswerProductos === text}
              onChange={() => setSelectedAnswerProductos(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
