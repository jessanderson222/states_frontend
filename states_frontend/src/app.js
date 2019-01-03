class App {
    constructor() {
        this.adapter = new Adapter();
        
    }
    attachEventListeners() {
        document.querySelector('#users-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const user = User.findById(id);
            if (event.target.classList.contains('edit-button')) {
            document.querySelector('#user-update').innerHTML = user.userUpdateForm()
            }

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
            if (event.target.classList.contains('new-button')){
                document.querySelector(`#card-form`).innerHTML = state.renderNewCardForm();
            }
            if (event.target.classList.contains('view-button')){
               document.querySelector('#states-view').innerHTML = state.renderViewPage();
            }
            
            
   
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
                    .then(card => {console.log(card)})

            })
        
        })

        document.querySelector('#cards-list').addEventListener('click', e => {
            const id = parseInt(e.target.dataset.id);
            const card = Card.findCardById(id);
            if (event.target.classList.contains('edit-button')) {
                document.querySelector('#card-update').innerHTML = card.cardUpdateForm();
            

                document.querySelector('#card-update').addEventListener('submit', e => {
                e.preventDefault();
                // debugger 
                const id = parseInt(e.target.dataset.id);
                const card = Card.findCardById(id);
                const name = e.target.querySelector('#c-name').value
                const notes = e.target.querySelector('#c-notes').value
                const has_been = e.target.querySelector('#c-checkbox').checked 
                const rating = e.target.querySelector('#c-rating').value.replace(/\D+/, '')
                    // debugger 
                const bodyJSON = { name, notes, has_been, rating };
                fetch(`http://localhost:3000/api/v1/cards/${card.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify(bodyJSON),
                })
                .then(res => res.json())
                .then(updatedCard => console.log(updatedCard)); 
                document.querySelector('#card-update').innerHTML = '<p><h3>Trip Updated!</h3></p><p><button class="close-button">Close</button></p>'
                })
            }
            if(event.target.classList.contains('delete-button')){
                // debugger 
                event.preventDefault()
               const id = parseInt(event.target.parentNode.parentNode.parentNode.id)
                return fetch(`http://localhost:3000/api/v1/cards/${id}`, {
                    method: 'DELETE'
                }).then(response => response.json())
                .then(json => {
                    console.log(json);
                })

            }
        })

        // document.querySelector('#states-view').addEventListener('click', e => {
        //     if (e.target.classList.contains('close-button')) {
        //         document.querySelector('#states-view').innerHTML = ""
        //     }
        // })

        document.querySelector('#card-update').addEventListener('click', e => {
            if (e.target.classList.contains('close-button')){
                document.querySelector('#card-update').innerHTML = ""
            }
            
        })


        
    }
}