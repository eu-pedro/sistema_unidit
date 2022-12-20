import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import context
import { useContext } from 'react';

// import components
import Home from './pages/home'
import Aluno from './pages/aluno/index'
import Curso from './pages/cursos'
import Registro from './pages/registros'
import Create from './pages/create.jsx';

function App() {

  
  

  return (
    <div className="App">
      <section className="container-main">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/alunos' element={<Aluno/>}/>
            <Route path='/cursos' element={<Curso/>}/>
            <Route path='/registro/:id' element={<Registro/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
        </Router>

      </section>
      
    </div>
  )
}

export default App;
