export function Espacio() {
  return (
    <div
      className={`tab-pane fade show`}
      id="pills-espacio"
      role="tabpanel"
      aria-labelledby="pills-espacio-tab"
    >
      <p>¿Como te gustaria tener tu espacio?</p>
      <fieldset>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked />
          <label for="huey">Pequeño</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Medio</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Grande</label>
        </div>
      </fieldset>
    </div>
  );
}
