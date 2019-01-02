class User {
    constructor(data) {
        this.id = data.id
        this.favorite_state = data.favorite_state
        this.img_url = data.img_url
        this.name = data.name 
        this.location = data.location
        this.cards = data.cards
        this.states = data.users
        User.all.push(this);
    }

    renderUser() {
        return `
       <div id="${this.id}-render" class='container'>
         <h3>${this.name}</h3>
         <p>
            <button data-id="${this.id}-view">view profile</button>
           <button data-id=${this.id} class="edit-button">edit</button>
        <div id="${this.id}-profile" class="user-profile"></div>
         
       </div>`;
     }

    static findById(id) {
         return this.all.find(user => user.id === id);
     }

    userUpdateForm() {
        return `
        <form data-id=${this.id}>
            <label>Name</label>
            <p>
                <input type="text" id="user-name" value="${this.name}" />
            </p>
            <label>Location</label>
            <p>
                <input type="text" id="user-location" value="${this.location}" />
            </p>
            <label>Image</label>
            <p>
                <input type="text" id="user-img" value="${this.img_url}" />
            </p>
            <label>Favorite State</label>
            <p>
                <input type="text" id="fave-state" value="${this.favorite_state}" />
            </p>
            <button type='submit'>Save User</button>
        </form>`
    }

}
User.all = []

