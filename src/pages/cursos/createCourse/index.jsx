import React, {useState} from 'react'

// import api
import api from '../../../services/api';


// import css
import './style.css'


// import Link

import { Link } from 'react-router-dom'

const Create = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  


  const postData =  async (e) => {
    e.preventDefault();

    try {
      await api.post("/curso", {
        nome: nomeCurso,
        carga_horaria: cargaHoraria
      })
  
      alert("Curso criado com sucesso!!")
  
      setNomeCurso("")
      setCargaHoraria("")

    } catch (error) {
      console.log("Houve um erro" + error)
    }

    
  }

  return (
    <div>
      <h3>Crie um novo curso</h3>

      <form onSubmit={postData}>
        <label htmlFor="nome_curso">Nome do Curso:</label>
        <input type="text" onChange={(e)=> setNomeCurso(e.target.value)} value={nomeCurso} required name="nome_curso" id="nome_curso"/>
        <label htmlFor="carga_horaria">Carga Horária:</label>
        <input type="number" onChange={(e)=> setCargaHoraria(e.target.value)} value={cargaHoraria} required name="carga_horaria" id="carga_horaria"/>
        
        <div className='container-button'>
          <Link to={'/cursos'}><button>Voltar</button></Link>
          <button type="submit">Cadastrar</button>
        </div>

      </form>
    </div>
  )
}

export default Create;