fetch('http://localhost:3001/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": "teste@gmail.com",
    "password": "1234"
  })
})
.then(response => response.json())
.then(data => {
  console.log(data); // Aqui você terá o token de acesso
})
.catch(error => console.error('Erro:', error));
