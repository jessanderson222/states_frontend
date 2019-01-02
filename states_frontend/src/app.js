class App {
    constructor() {
        this.adapter = new Adapter();
        
    }
    attachEventListeners() {
        document.querySelector('#users-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const user = User.findById(id);
            document.querySelector('#user-update').innerHTML = user.userUpdateForm()
        

        document.querySelector('#user-update').addEventListener('submit', e => {
            e.preventDefault();
            const id = parseInt(e.target.dataset.id);
            const user = User.findById(id);
            const name = e.target.querySelector('#user-name').value;
            const location = e.target.querySelector('#user-location').value;
            const image = e.target.querySelector('#user-img').value;
            const faveState = e.target.querySelector('#fave-state').value;
            const jsonBody = { name, location, image, faveState };
            this.adapter.updateUser(user.id, jsonBody).then(updatedUser => console.log(updatedUser));  
                
        })
        });

        
        document.querySelector('#states-list').addEventListener('click', e => {
            const stateId = parseInt(e.target.dataset.id);
            const state = State.findStateById(stateId); 
            document.querySelector(`#card-form`).innerHTML = state.renderNewCardForm();
            
   
            document.querySelector(`#card-form`).addEventListener('submit', e => {
                e.preventDefault();
                let data = {
                 'name': document.querySelector('#c-name').value,
                 'notes': document.querySelector('#c-notes').value,
                 'has_been': document.querySelector('#c-checkbox').checked,
                 'rating': document.querySelector('#c-rating').value,
                 'user_id': parseInt(document.querySelector('#user-id').value),
                'state_id': parseInt(document.querySelector('#state-id').value),
                };

                fetch('http://localhost:3000/api/v1/cards', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                     'Content-Type': 'application/json',
                     Accept: 'application/json',
                         }
                        })
                    .then(response => response.json())
                    .then(card => console.log(card))

            })
        
        })

        
    }
}