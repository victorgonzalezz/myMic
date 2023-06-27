export function TipoDeEmpresa() {
  return (
    <div
      className={`tab-pane fade show`}
      id="pills-tipo-empresa"
      role="tabpanel"
      aria-labelledby="pills-tipo-empresa-tab"
    >
      <p>¿Cuál tipo de negocio describe su empresa?</p>
      <fieldset>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked />
          <label for="huey">Buena</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Muy Buena</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Excelente</label>
        </div>
      </fieldset>
    </div>
  );
}
