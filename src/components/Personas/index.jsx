export function Personas() {
  return (
    <div
      className={`tab-pane fade show`}
      id="pills-personas"
      role="tabpanel"
      aria-labelledby="pills-personas-tab"
    >
      <p>¿Con quantas personas te gustaria estar?</p>
      <fieldset>
        <div>
          <input type="radio" id="huey" name="drone" value="huey"
                checked />
          <label for="huey">Poca gente</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Alguna gente</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Mucha gente</label>
        </div>
      </fieldset>
    </div>
  );
}
