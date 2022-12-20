import { useEffect, useState } from "react";

import api from '../../services/api.js'

const Registro = () => {

    const [registeredMedicine, setRegisteredMedicine] = useState([])

    

    useEffect(() => {
        api.get("/aluno?cod_curso=1").then((response) => setRegisteredMedicine(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err)
        })
        
      }, [])

    return(
        <div>
            <table>
                <thead>
                    <tr>Código do Aluno</tr>
                    <td>Nome</td>
                    <td>Curso Matriculado</td>
                </thead>

                <tbody>
                    <tr>
                    {registeredMedicine.map((registered) => (
                        <td>{registered.cod_aluno}</td>
                    ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Registro;