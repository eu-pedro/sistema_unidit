import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import './style.css'

import api from '../../services/api.js'



const Aluno = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState([])


    useEffect(() => {
        api.get("/aluno").then((response) => setUser(response.data))
        .catch((err) => {
            console.log("ocorreu um erro", err)
        })
    }, [])

    const handleEdit = (cod) => {
        navigate(`/aluno/${cod}`)
    }

    const handleDelete = (codAluno) => {
      if(confirm('tem certeza que você quer excluir o curso?')){
         api.delete(`/aluno/${codAluno}`)
         alert('dados deletados com sucesso!')
      }
      window.location.reload(true);
    }

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
              <td colSpan={2}></td>
            </tr>
          </thead>

          <tbody>
              {user.map((users) => (
                  <tr key={users.cod_aluno}>
                      <td >{users.cod_aluno}</td>
                      <td>{users.nome}</td>
                      <td>{users.cpf}</td>
                      <td>{users.telefone}</td>
                      <td>{users.email}</td>
                      <td>{users.cep}</td>
                      <td>{users.rua}</td>
                      <td>{users.bairro}</td>
                      <td>{users.numero_casa}</td>
                      <td>{users.uf}</td>
                      <td onClick={()=> handleEdit(users.cod_aluno)}>editar</td>
                      <td onClick={() => handleDelete(users.cod_aluno)}>deletar</td>
                  </tr>
              ))}

          </tbody>
        </table>

        <div className="container-button">
            <Link to={'/'}><button>Voltar</button></Link>
            <Link to={'/create/aluno'}><button>Criar novo Aluno</button></Link>

        </div>





        </>
    )
}

export default Aluno;
