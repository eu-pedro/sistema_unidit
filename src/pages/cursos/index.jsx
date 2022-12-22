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

    const handleEdit = (cod) => {
      navigate(`/curso/${cod}`)
    }

    const handleDelete = (cod) => {
      if(confirm('tem certeza que você quer excluir o curso?')){
        api.delete(`/curso/${cod}`)

        alert('curso deletado')
      }
      window.location.reload(true);
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
              <td >Data do Cadastro</td>
              <td colSpan={2}></td>


            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (

                <tr key={course.cod_curso}>
                  <td>{course.cod_curso}</td>
                  <td onClick={() => handleNavigate(course.cod_curso)}>{course.nome}</td>
                  <td>{course.carga_horaria}</td>
                  <td>{course.data_cadastro}</td>
                  <td onClick={() => handleEdit(course.cod_curso)}>editar</td>
                  <td onClick={() => handleDelete(course.cod_curso)}>deletar</td>
                </tr>
            ))}
          </tbody>
        </table>

        <div className="container-button">
            <Link to={'/'}><button>Voltar</button></Link>
            <Link to="/create/curso"><button>Criar Curso</button></Link>
        </div>
        </>
    )


}

export default Cursos;
