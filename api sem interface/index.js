fetch('http://localhost:3000/usuarios')
  .then((req) => req.json())
  .then((data) => console.log(data));
