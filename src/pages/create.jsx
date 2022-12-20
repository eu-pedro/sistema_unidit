import React, {useState} from 'react'

import api from '../services/api';

const Create = () => {
  const [nomeCurso, setNomeCurso] = useState();
  const [cargaHoraria, setCargaHoraria] = useState();
  const [dataCadastro, setDataCadastro] = useState();


  const postData = (e) => {

    api.post("/curso", {
      nomeCurso,
      cargaHoraria,
      dataCadastro
    })

    e.preventDefault();

    console.log(nomeCurso)
    console.log(cargaHoraria)
    console.log(dataCadastro)
  }

  return (
    <div>
      <h3>Crie um novo curso</h3>

      <form action="">
        <label htmlFor="nome_curso">Nome do Curso</label>
        <input type="text" onChange={(e)=> setNomeCurso(e.target.value)} required name="nome_curso" id="nome_curso"/>
        <label htmlFor="carga_horaria">Carga Horária</label>
        <input type="text" onChange={(e)=> setCargaHoraria(e.target.value)} required name="carga_horaria" id="carga_horaria"/>
        <label htmlFor="data_cadastro">Data de Cadastro</label>
        <input type="data" onChange={(e)=> setDataCadastro(e.target.value)} required name="data_cadastro" id="data_cadastro"/>

        <button type="submit" onClick={postData}>Cadastrar</button>
      </form>
    </div>
  )
}

export default Create;