/* src/index.js */
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  //FETCH STATES
  app.adapter.fetchStates().then(json => {
    json.forEach(state => {
      document.querySelector('#states-list').innerHTML += new State(state).renderState();
    });
  });
  
    //FETCH USER DATA 
    const userApi = "http://localhost:3000/api/v1/users" 
     fetch(userApi)
     .then(res => res.json())
     .then(data => data.forEach(user => {
      const newUser = new User(user);
      document.querySelector(`#users-list`).innerHTML += newUser.renderUser();
    }));

    //FETCH CARDS
    const cardApi = "http://localhost:3000/api/v1/cards"
    fetch(cardApi)
    .then(res => res.json())
    .then(data => data.forEach(card => {
        const newCard = new Card(card);
        document.querySelector('#cards-list').innerHTML += newCard.renderCard();
      }))

  });




