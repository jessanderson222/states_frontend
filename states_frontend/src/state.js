class State {
    constructor(data) {
        this.id = data.id
        this.famous_for = data.famous_for
        this.img_url = data.img_url
        this.name = data.name 
        this.region = data.region
        this.cards = data.cards
        this.users = data.users
        State.all.push(this);
    }

renderState() {
     return `
      <div class='state-item' id='${this.id}'>
      <div id='${this.name}-${this.id}'>
      <h3>${this.name}</h3>
      
    <p>
        <button data-id=${this.id}>view</button>
        <button data-id='${this.id}-card' class='new-button'>roadtrip!</button>
      </p>
      </div>
      <div id='${this.name}-trip'></div>
      </div>
    `;
  }

  static findStateById(id) {
    return this.all.find(state => state.id === id);
}

static findStateByName(name) {
  return this.all.find(state => state.name === name);
}

renderNewCardForm () {
  return `
  <form data-id='${this.id}-card'>
  <label>Trip to ${this.name}</label>
  <p>
    <input type="hidden" id="state-id" value="${this.id}" />
  </p>
  <p>
    <input type="hidden" id="user-id" value="1" />
  </p>
  <label>Name</label>
  <p>
  <input id='c-name' type='text' name='Name'>
  </p>
  <label>Notes</label>
  <p>
  <input type='text'id="c-notes" name="notes">
  </p>
    <label>Have you taken your trip?</label>
    <p>
        <input id='c-checkbox' type="checkbox" name="has_been" value="been">
    </p>
    <label>Rating</label>
    <p>
            <select id="c-rating" name="rating">
                <option value='rating-0'>0</option>
                <option value='rating-1'>1</option>
                <option value='rating-2'>2</option>
                <option value='rating-3'>3</option>
                <option value='rating-4'>4</option>
                <option value='rating-5'>5</option>
            </select>
      </p>
        <input type="submit" value="Submit"/>
</form>
  `
}

}
  State.all = [];
