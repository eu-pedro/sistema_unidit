import { useState } from "react";
import api from "../../../services/api";

import { Link, useNavigate } from "react-router-dom";

const CreateAluno = () => {

  const navigate = useNavigate();

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

  api.get("/curso").then((response) => setOptions(response.data));



  const postData = async (e) => {
    e.preventDefault();

    try {
      await api.post(`aluno`, {
        cod_curso: codCurso,
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        cep: cep,
        rua: rua,
        bairro: bairro,
        numero_casa: numeroCasa,
        uf: uf,
      });

      alert("dados cadastrados com sucesso!");
      navigate('/alunos')
    } catch (error) {
      alert("houve um erro");
    }

    setNome("");
    setCodCurso("");
    setCpf("");
    setTelefone("");
    setEmail("");
    setCep("");
    setRua("");
    setBairro("");
    setNumeroCasa("");
    setUf("");
  };



  return (
    <div>
      <h3>Novo Aluno</h3>
      <form onSubmit={postData}>
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => setCodCurso(e.target.value)}
          name="cod_curso"
          id="cod_curso"
          required
        >
          <option value="DEFAULT" disabled>
            Código do Curso
          </option>
          {options.map((option) => (
            <option key={option.cod_curso}>{option.cod_curso}</option>
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
        />
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="number"
          name="telefone"
          id="telefone"
          onChange={(e) => setTelefone(e.target.value)}
          maxLength={11}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="cep">CEP</label>
        <input
          type="number"
          name="cep"
          id="cep"
          onChange={(e) => setCep(e.target.value)}
          required
        />
        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          name="rua"
          id="rua"
          onChange={(e) => setRua(e.target.value)}
          required
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          onChange={(e) => setBairro(e.target.value)}
          required
        />
        <label htmlFor="numero_casa">Número da Casa</label>
        <input
          type="text"
          name="numero_casa"
          id="numero_casa"
          onChange={(e) => setNumeroCasa(e.target.value)}
          required
        />
        <label htmlFor="uf">UF</label>
        <input
          type="text"
          name="uf"
          id="uf"
          onChange={(e) => setUf(e.target.value)}
          required
        />

        <div className="container-button">
          <Link to={'/alunos'}><button>Voltar</button></Link>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAluno;
