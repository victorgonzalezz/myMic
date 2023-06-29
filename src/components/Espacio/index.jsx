import { useState } from 'react'

export function Espacio({ question, answer }) {
  const [selectedAnswerEspacio, setSelectedAnswerEspacio] = useState('')
  return (
    <div
      className={`tab-pane fade show`}
      id="pills-espacio"
      role="tabpanel"
      aria-labelledby="pills-espacio-tab"
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
              checked={selectedAnswerEspacio === text}
              onChange={() => setSelectedAnswerEspacio(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  )
}
