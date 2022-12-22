import React, {useState} from 'react'

import api from '../services/api';

const Create = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");
  const [dataCadastro, setDataCadastro] = useState("");


  const postData =  async (e) => {
    e.preventDefault();

    

    await api.post("/curso", {
      nomeCurso,
      cargaHoraria
    })

    

    console.log(nomeCurso)
    console.log(cargaHoraria)
    
  }

  return (
    <div>
      <h3>Crie um novo curso</h3>

      <form action="">
        <label htmlFor="nome_curso">Nome do Curso</label>
        <input type="text" onChange={(e)=> setNomeCurso(e.target.value)} value={nomeCurso} required name="nome_curso" id="nome_curso"/>
        <label htmlFor="carga_horaria">Carga Horária</label>
        <input type="text" onChange={(e)=> setCargaHoraria(e.target.value)} value={cargaHoraria} required name="carga_horaria" id="carga_horaria"/>
        
        <button type="submit" onClick={postData}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Create;