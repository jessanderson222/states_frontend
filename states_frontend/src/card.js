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
    setUser(card) {
        this.cardId = card.id
    }
    setState(state) {
        this.stateId = state.id 
    }

renderCard() {
     return `
     <div class="card-item" id=${this.id}>
    <div id="${this.name}-${this.id}">
      <h4>${this.name}</h4>
      <h6>trip by ${this.user.name}</h6>
      <p>Rating: ${this.rating}</p>
      <p>${this.notes}</p>
      <p>
        <button data-id='${this.id}-edit' class='edit-button'>edit</button>
        <button data-id='${this.id}-delete' class='delete-button'>delete</button>
    </p>
    </div>
    <div id="${this.name}-edit"></div>
    </div>`;
  }

  static findCardById(id) {
    return this.all.find(card => card.id === id);
}

cardUpdateForm() {
   return `
   <form data-id=${this.id}>
   <label>Name</label>
   <p>
   <input id='c-name' type='text' name='Name' value="${this.name}">
   
   <label>Notes</label>
   
   <input type='text'id="c-notes" name="notes" value="${this.notes}">
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
             </select><p>
       <button type='submit' classlist='card-update-button'>Save Trip</button>
       </p>
   </form>`
}

// deleteCard(e) {
//     const id = e.target.dataset.id
//     fetch(`http://localhost:3000/api/v1/cards/${this.id}`, {
//         method: 'DELETE'
//     })
//     .then(() => {
//         document.getElementById('cards-list')
//         .removeChild(document.getElementById(this.id))
//     })
// }

}
  Card.all = [];
