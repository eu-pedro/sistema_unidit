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

function App() {

  return (
    <div className="App">
      <section className="container-main">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/alunos' element={<Aluno/>}/>
            <Route path='/cursos' element={<Curso/>}/>
          </Routes>
        </Router>

      </section>
      
    </div>
  )
}

export default App;
