import { useState } from "react";

export function TipoDeEmpresa({ question, answer }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <div
      className={`tab-pane fade show`}
      id="pills-tipo-empresa"
      role="tabpanel"
      aria-labelledby="pills-tipo-empresa-tab"
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
              checked={selectedAnswer === text}
              onChange={() => setSelectedAnswer(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
console.log()
