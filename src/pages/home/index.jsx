import './style.css'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Bem vindo ao Sistema <span className='dit'>UniDIT</span>!</h1>
            
            <h3>Ver tabelas de:</h3>

            <section className='container-button'>
                <Link to={'/alunos'}>
                    <button>Alunos</button>
                </Link>
                
                <Link to={'/cursos'}><button>Cursos</button></Link>
            </section>
        </div>
    )
}

export default Home;