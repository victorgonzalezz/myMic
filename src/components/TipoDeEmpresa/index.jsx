export function TipoDeEmpresa({question, answer}) {
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
              name="drone"
              value={text}
              checked
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

      // <div>
      //   <input type="radio" id="huey" name="drone" value="huey"
      //         checked />
      //   <label for="huey">Huey</label>
      // </div>
