class Adapter {
    constructor() {
      this.baseUrl = 'http://localhost:3000/api/v1';
      this.headers = {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      };
    }
    fetchStates() {
      return fetch(`${this.baseUrl}/states`).then(res => res.json());
    }
  
    updateUser(id, body) {
      return fetch(`${this.baseUrl}/users/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(body),
      }).then(res => res.json());
    }

    // fetchCards() {
    //     return this.get(`${this.baseUrl}/cards`).then(res => res.json());
    // }

    updateCard(id, body) {
        return this.patch(`${this.baseUrl}/cards/${id}`, body);
    }

    get(url) {
        return fetch(url).then(res => res.json());
    }

    patch(url, body) {
        return fetch(url, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body),
        }).then(res => res.json());
        
    }

  }