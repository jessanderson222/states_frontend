let cardId = 0
class Card {
    constructor(data) {
        this.id = data.id
        this.user_id = data.user_id
        this.state_id = data.state_id
        this.name = data.name 
        this.has_been = data.has_been
        this.notes = data.notes
        this.rating = data.rating
        this.user = data.user
        this.state = data.state

        Card.all.push(this);
    }
    setUser(user) {
        this.userId = user.id
    }
    setState(state) {
        this.stateId = state.id 
    }

renderCard() {
     return `
    <li>
      <h3>${this.name}
        <button data-id=${this.id}>view</button>
        <button data-id='${this.id}-edit'>edit</button>
        <button data-id='${this.id}-delete'>delete</button>
      </h3>
    </li>`;
  }

  static findCardById(id) {
    return this.all.find(card => card.id === id);
}

cardUpdateForm() {
   return `
   <form data-id=${this.id}>
       <label>Name</label>
       <p>
           <input type="text" id="card-name" value="${this.name}" />
       </p>
       <label>Notes</label>
       <p>
           <input type="text" id="card-notes" value="${this.notes}" />
       </p>
       <label>Rating</label>
       <p>
           <input type="text" id="card-rating" value="${this.rating}" />
       </p>
       <button type='submit'>Save Trip</button>
   </form>`
}

}
  Card.all = [];
