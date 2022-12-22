import { useEffect, useState } from "react"

import api from '../../../services/api'

const updateCurso = () => {

    const [value, setValue] = useState([]);

    console.log(value)

    

    useEffect(() => {
        const path = window.location.pathname
        const codCurso = path.trim().split('/')[3]
        

        api.get(`/curso?cod_curso=${codCurso}`).then((response) => setValue(response.data))
        .catch((err) => {
          console.log("ocorreu um erro", err)
        })
        
      }, [])


    return (
        <div>
            {value.map((itens) => (
                <>
                <input type="text" value={itens.nome} />
                <input type="number" value={itens.carga_horaria} />
                </>
            ))}
        </div>
    )
}

export default updateCurso;