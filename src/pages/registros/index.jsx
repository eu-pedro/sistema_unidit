import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api.js'

const Registro = () => {

    const [registeredMedicine, setRegisteredMedicine] = useState([])

    const [value, setValue] = useState(0)

    const [openTable, setOpenTable] = useState(false)


    const handleClickButton = (cod) => {
        setValue(cod)
        setOpenTable(true)
    }
        
    
    

    useEffect(() => {
        api.get(`/aluno?cod_curso=${value}`).then((response) => setRegisteredMedicine(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err)
        })
        
      }, [value])

    return(
        <div>
            <div className="container-button">
                <button onClick={()=> handleClickButton(1)}>Medicina</button>
                <button onClick={()=> handleClickButton(2)}>Direito</button>
                <button onClick={()=> handleClickButton(3)}>Administração</button>
            </div>

            
           {openTable ? (
            <>
             <table>
                <thead>
                    <tr>
                        <td>Código do Aluno</td>
                        <td>Nome</td>
                        <td>Curso Matriculado</td>
                    </tr>
                </thead>

                <tbody>
                    {registeredMedicine.map((registered) => (
                    <tr key={registered.cod_aluno}>
                        <td>{registered.cod_aluno}</td>
                        <td>{registered.nome}</td>
                        <td>{registered.curso_nome}</td>
                    </tr>
                    ))}
                </tbody>
             </table>

             <div className="container-button">
                <Link to="/"><button>Voltar</button></Link>
             </div>
            </>
           ) : null}

           
        </div>
    )
}

export default Registro;