import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import api from '../../services/api.js'

const Aluno = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        api.get("/aluno").then((response) => setUser(response.data))
        .catch((err) => {
            console.log("ocorreu um erro", err)
        })
    }, [])

    return (
        <>
        <h2 className='title-aluno'>Tabela de Alunos</h2>
        <table>
          <thead>
            <tr className='topo'>
              <td>Código Aluno</td>
              <td>Nome</td>
              <td>CPF</td>
              <td>Telefone</td>
              <td>E-mail</td>
              <td>CEP</td>
              <td>Rua</td>
              <td>Bairro</td>
              <td>Número da Casa</td>
              <td>UF</td>
            </tr>
          </thead>

          <tbody>
              {user.map((users) => (
                <>
                  <tr>
                      <td key={users.cod_aluno}>{users.cod_aluno}</td>
                      <td>{users.nome}</td>
                      <td>{users.cpf}</td>
                      <td>{users.telefone}</td>
                      <td>{users.email}</td>
                      <td>{users.cep}</td>
                      <td>{users.rua}</td>
                      <td>{users.bairro}</td>
                      <td>{users.numero_casa}</td>
                      <td>{users.uf}</td>
                  </tr>
                  
                </>
              ))}
            
          </tbody>
        </table>

        <div className="container-button">
            <Link to={'/'}><button>Voltar</button></Link>
        </div>
        </>
    )
}

export default Aluno;