import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Sector({ question, answer }) {
  const [selectedAnswerSector, setSelectedAnswerSector] = useState('')

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
  )
}
