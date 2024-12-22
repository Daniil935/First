const config = {
  baseUrl: 'https://nomoreparties.co/v1/apf-cohort-202',
  headers: {
    authorization: '96267225-18f8-48d5-a1c6-d9a6f39f6739',
    'Content-Type': 'application/json'
  }
}

function getUser() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function getInitialCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: config.headers.authorization
    }
  });
}

function updateAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: {
      authorization: config.headers.authorization
    },
    body: JSON.stringify({avatar})
  });
}

function updateProfile(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({name, about})
  });
}

function addNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({name, link})
  })
}

function setCardLike(id, method) {
  return fetch(`${config.baseUrl}/cards/likes/${id}`, {
    method,
    headers: {
      authorization: config.headers.authorization
    }
  })
}

function deleteCard(id) {
  return fetch(`${config.baseUrl}/cards/${id}`, {
    method: "DELETE",
    headers: {
      authorization: config.headers.authorization
    }
  })
}

export {getUser, getInitialCards, updateAvatar, updateProfile, addNewCard, setCardLike, deleteCard};
