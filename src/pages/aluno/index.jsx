import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import './style.css'

import api from '../../services/api.js'



const Aluno = () => {
    const navigate = useNavigate();

    

    const [user, setUser] = useState([])


    useEffect(() => {
        api.get("/aluno").then((response) => setUser(response.data))
        .catch((err) => {
            console.log("ocorreu um erro", err)
        })
    }, [])

    const handleClickButton = (cod) => {
        const [value, setValue] = useState()

        
        
        

        navigate('/cursos')
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
                  </tr>
              ))}
            
          </tbody>
        </table>

        <div className="container-button">
            <Link to={'/'}><button>Voltar</button></Link>
        </div>


        
        <h3>Alunos matriculados em: </h3>
        <section className="container-button-cursos">
            <button onClick={()=> handleClickButton()}>Medicina</button>
            <button>Direito</button>
            <button>Administração</button>
        </section>
        </>
    )
}

export default Aluno;