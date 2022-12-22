import { useState } from "react";

const CreateAluno = () => {

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [uf, setUf] = useState("");


    return (

     <div>
        <h3>Novo Aluno</h3>
        <form>
            <label htmlFor="nome">Nome: </label>
            <input type="text" required id="nome" name="nome"/>
            <label htmlFor="cpf">CPF</label>
            <input type="number" required name="cpf" id="cpf" max={11}/>
            <label htmlFor="telefone">Telefone:</label>
            <input type="number" required name="telefone" id="telefone" max={11}/>
            <label htmlFor="email">E-mail</label>
            <input type="email" required name="email" id="email" />
            <label htmlFor="cep">CEP</label>
            <input type="number" required name="cep" id="cep"/>
            <label htmlFor="rua">Rua</label>
            <input type="text" required name="rua" id="rua" />
            <label htmlFor="bairro">Bairro</label>
            <input type="text" required name="bairro" id="bairro" />
            <label htmlFor="numero_casa">Número da Casa</label>
            <input type="text" required name="numero_casa" id="numero_casa" />
            <label htmlFor="uf">UF</label>
            <input type="text" required name="uf" id="uf" />

            <button type='submit'>Cadastrar</button>
        </form>
     </div>
    )
}

export default CreateAluno;