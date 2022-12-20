import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from '../../services/api.js'

const Cursos = () => {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])

    useEffect(() => {
        api.get("/curso").then((response) => setCourses(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err)
        })
        
      }, [])

    const handleNavigate = (codCurso) => {
        navigate(`/registro/${codCurso}`)
    }

    return (
        <>
        <h2 className="title-curso">Tabela de Cursos</h2>
        <table>
          <thead>
            <tr className='topo'>
              <td>Código do Curso</td>
              <td>Nome do Curso</td>
              <td>Carga horária</td>
              <td>Data do Cadastro</td>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              
                <tr key={course.cod_curso} onClick={() => handleNavigate(course.cod_curso)}>
                  <td>{course.cod_curso}</td>         
                  <td>{course.nome}</td>       
                  <td>{course.carga_horaria}</td>       
                  <td>{course.data_cadastro}</td>       
                </tr> 
              
            ))}
          </tbody>
        </table>

        <div className="container-button">
            <Link to={'/'}><button>Voltar</button></Link>
            <Link to="/create"><button>Criar Curso</button></Link>
        </div>
        </>
    )
}

export default Cursos;