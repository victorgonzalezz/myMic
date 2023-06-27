export function Productos() {
  
  return (
    <div
      className={`tab-pane fade show`}
      id="pills-productos"
      role="tabpanel"
      aria-labelledby="pills-productos-tab"
    >
      <p>¿Como te gustaria tener tus productos?</p>
      <fieldset>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked />
          <label for="huey">Sofisticados</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Modernos</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Antiguos con agregado valor</label>
        </div>
      </fieldset>
    </div>
  );
}
