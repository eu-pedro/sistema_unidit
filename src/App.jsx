import './App.css'
import api from './services/api.js'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState([])
  
  useEffect(() => {
    api.get("/aluno").then((response) => setUser(response.data))
    .catch((err) => {
      console.log("ocorreu um erro", err)
    })
    
  }, [])

  console.log(user)
  
  return (
    <div className="App">

      <h2>Tabela de Alunos</h2>
      {user.map((users) => (
        <table key={users.cod_aluno}>
          <thead>
            <tr>
              <td >Código Aluno</td>
              <td>Nome</td>
              <td>Email</td>
              <td>CPF</td>
              <td>CEP</td>
              <td>Bairro</td>
              <td>Rua</td>
              <td>Telefone</td>
              <td>UF</td>
              <td>Numero da Casa</td>
            </tr>

            <tr>
              <td>{users.cod_aluno}</td>
              <td>{users.nome}</td>
              <td>{users.email}</td>
              <td>{users.cpf}</td>
              <td>{users.cep}</td>
              <td>{users.bairro}</td>
              <td>{users.rua}</td>
              <td>{users.telefone}</td>
              <td>{users.uf}</td>
              <td>{users.numero_casa}</td>
            </tr>
          </thead>
        </table>
      ))}
    </div>
  )
}

export default App
