import { useState } from 'react'

export function Personas({ question, answer }) {
  const [selectedAnswerPersonas, setSelectedAnswerPersonas] = useState('')

  return (
    <div
      className={`tab-pane fade show`}
      id="pills-personas"
      role="tabpanel"
      aria-labelledby="pills-personas-tab"
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
              checked={selectedAnswerPersonas === text}
              onChange={() => setSelectedAnswerPersonas(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  )
}
