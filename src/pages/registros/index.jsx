import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api.js";

import "./style.css";

const Registro = () => {
  const [registereds, setRegistereds] = useState([]);

  const [isLoader, setIsLoader] = useState(true);
  const [message, setMessage] = useState("")

  

  useEffect(() => {
    const timer = setTimeout(() => {
      const path = window.location.pathname;
      const codCurso = path.trim().split("/")[2];

      api
        .get(`/aluno?cod_curso=${codCurso}`)
        .then((response) => setRegistereds(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err);
        });
      
      setIsLoader(false)
      setMessage("Nenhum aluno matriculado neste curso")
    }, 1500);

    return () => clearTimeout(timer);
  });

  return (
    <div className="container">
      {isLoader && <div className="loader"></div>}

      <>
      <div className="container-table">
        <h3>Alunos matriculados</h3>
        
          {!!registereds.length ? (
            <table>
              <thead>
                <tr>
                  <td>Código do Aluno</td>
                  <td>Nome</td>
                  <td>Curso Matriculado</td>
                </tr>
              </thead>

              <tbody>
                {registereds.map((registered) => (
                  <tr key={registered.cod_aluno}>
                    <td>{registered.cod_aluno}</td>
                    <td>{registered.nome}</td>
                    <td>{registered.curso_nome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            message
          )}
        </div>

        <div className="container-button">
          <Link to="/cursos">
            <button>Voltar</button>
          </Link>
        </div>
      </>
    </div>
  );
};

export default Registro;
