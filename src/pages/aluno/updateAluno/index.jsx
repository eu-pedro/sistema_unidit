import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import api from "../../../services/api";

const updateAluno = () => {
  const { pathname } = useLocation();
  const [, , codAluno] = pathname?.split("/");

  const [values, setValues] = useState([]);
  const [options, setOptions] = useState([]);

  const [nome, setNome] = useState("");
  const [codCurso, setCodCurso] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numeroCasa, setNumeroCasa] = useState("");
  const [uf, setUf] = useState("");

  useEffect(()=>{
    api.get("/curso").then((response) => setOptions(response.data));
  }, [])

  useEffect(() => {
    api
    .get(`/aluno?cod_aluno=${codAluno}`)
    .then((response) => setValues(response?.data));
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`aluno/${codAluno}`, {
        cod_curso: codCurso,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        cep: cep,
        rua: rua,
        bairro: bairro,
        numero_casa: numeroCasa,
        uf: uf
      });

      alert('dados atualizados com sucesso!')

      navigate('/alunos')
    } catch (error) {
        alert("houve um erro")
    }
  };

  return (
    <div>
      <h3>Atualize o Curso</h3>
      <form onSubmit={handleUpdate}>
        {values.map((value) => (
          <Fragment key={value.cod_aluno}>
            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              id="nome"
              name="nome"
              onChange={(e) => setNome(e.target.value)}
              required
              defaultValue={value.nome}
            />
            <select
              defaultValue={value.cod_curso}
              onChange={(e) => setCodCurso(e.target.value)}
              name="cod_curso"
              id="cod_curso"
              required
            >
              <option value={value.cod_curso} disabled>
                {value.cod_curso}
              </option>

              {options.map((option) => (
                <Fragment key={option.cod_curso}>
                  <option>{option.cod_curso}</option>
                </Fragment>
              ))}
            </select>
            <label htmlFor="cpf">CPF</label>
            <input
              type="number"
              name="cpf"
              id="cpf"
              onChange={(e) => setCpf(e.target.value)}
              maxLength={11}
              required
              defaultValue={value.cpf}
            />
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="number"
              name="telefone"
              id="telefone"
              onChange={(e) => setTelefone(e.target.value)}
              maxLength={11}
              required
              defaultValue={value.telefone}
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              defaultValue={value.email}
            />
            <label htmlFor="cep">CEP</label>
            <input
              type="number"
              name="cep"
              id="cep"
              onChange={(e) => setCep(e.target.value)}
              required
              defaultValue={value.cep}
            />
            <label htmlFor="rua">Rua</label>
            <input
              type="text"
              name="rua"
              id="rua"
              onChange={(e) => setRua(e.target.value)}
              required
              defaultValue={value.rua}
            />
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              name="bairro"
              id="bairro"
              onChange={(e) => setBairro(e.target.value)}
              required
              defaultValue={value.bairro}
            />
            <label htmlFor="numero_casa">Número da Casa</label>
            <input
              type="text"
              name="numero_casa"
              id="numero_casa"
              onChange={(e) => setNumeroCasa(e.target.value)}
              required
              defaultValue={value.numero_casa}
            />
            <label htmlFor="uf">UF</label>
            <input
              type="text"
              name="uf"
              id="uf"
              onChange={(e) => setUf(e.target.value)}
              required
              defaultValue={value.uf}
            />
          </Fragment>
        ))}

        <div className="container-button">
          <Link to={"/alunos"}>
            <button type="button">Voltar</button>
          </Link>
          <button type="submit">Atualizar</button>
        </div>
      </form>
    </div>
  );
};

export default updateAluno;
