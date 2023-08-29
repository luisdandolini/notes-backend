const express = require('express');
const app = express();
const PORT = 3000;

app.get('/message/:id/:user', (req, res) => {
  const { id, user } = req.params;

  res.send(`Mensagem ID: ${id}. Para o usuário ${user}`)
});

app.get('/users', (req, res) => {
  const { page, limit } = req.query;

  res.send(`Página: ${page} e Limite: ${limit}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});