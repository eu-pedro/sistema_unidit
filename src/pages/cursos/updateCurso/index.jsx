import { Fragment, useEffect, useState } from "react";

import { useLocation, useNavigate, Link } from "react-router-dom";

import api from "../../../services/api";

const updateCurso = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState([]);
  const [nome, setNome] = useState("");
  const [cargaHoraria, setCargaHoraria] = useState("");

  const [, , codCurso] = pathname?.split("/");





  useEffect(() => {
    api
      .get(`/curso?cod_curso=${codCurso}`)
      .then((response) => response.data.map((campo) => (
        setNome(campo.nome),
        setCargaHoraria(campo.carga_horaria)
      )))
      .catch((err) => {
        console.log("ocorreu um erro", err);
      });
  }, []);

  const handleUpdate = async (e) => {

    e.preventDefault();

    await api.put(`curso/${codCurso}`, {
      nome: nome,
      carga_horaria: cargaHoraria,
    });

    navigate('/cursos')
  };

  return (
    <div>
      <h3>Atualize o Curso</h3>
      <form onSubmit={handleUpdate}>

            <input
              type="text"
              defaultValue={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="number"
              defaultValue={cargaHoraria}
              onChange={(e) => setCargaHoraria(e.target.value)}
            />



        <div className="container-button">
          <Link to={'/cursos'}><button type="button">Voltar</button></Link>
          <button type="submit">Atualizar</button>

        </div>
      </form>
    </div>
  );
};

export default updateCurso;
