import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



// import components
import Home from './pages/home'
import Aluno from './pages/aluno/index'
import Curso from './pages/cursos'
import Registro from './pages/registros'
import CreateCurso from './pages/cursos/createCourse';
import CreateAluno from './pages/aluno/createAluno'
import UpdateCurso from './pages/cursos/updateCurso';
import UpdateAluno from './pages/aluno/updateAluno'

function App() {

  
  

  return (
    <div className="App">
      <section className="container-main">
        <Router>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/alunos' element={<Aluno/>}/>
            <Route path='/create/aluno' element={<CreateAluno/>}/>
            <Route path='/aluno/:id' element={<UpdateAluno/>}/>
            

            <Route path='/cursos' element={<Curso/>}/>
            <Route path='/create/curso' element={<CreateCurso/>}/>
            <Route path='/curso/:id' element={<UpdateCurso/>}/>


            <Route path='/registro/:id' element={<Registro/>}/>
            
          </Routes>
        </Router>

      </section>
      
    </div>
  )
}

export default App;
