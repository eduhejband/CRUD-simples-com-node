const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`)
})


const repository = require('./repository')

app.get('/pessoas', repository.getPessoas)
app.get('/pessoas/:id', repository.getPessoaById)
app.post('/pessoas', repository.createPessoa)
app.put('/pessoas/:id', repository.updatePessoa)
app.delete('/pessoas/:id', repository.deletePessoa)



  