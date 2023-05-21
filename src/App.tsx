
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home';
import Sobre from './Sobre';
import Carros from './Carros';
import {BrowserRouter, Routes, Link, Route}  from 'react-router-dom';
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div>
    //   <h3>42-Desafio-Labs</h3>
    //   <h4 style={{color: "green"}}>Rodapé 1</h4>
    //   <h4 style={{color: "#0000FF"}}>Rodapé 2</h4>
    // </div>
    <div className="App">
      <header>
        <h1>42-Desafio-Labs</h1>
        <BrowserRouter>

        <Nav variant="tabs">
          <Nav.Link as={Link} to= "/">Pagina Inicial</Nav.Link>
          <Nav.Link as={Link} to= "/Carros">Lista de Carros</Nav.Link>
          <Nav.Link as={Link} to= "/Sobre">Sobre</Nav.Link>
        </Nav>
        {/* <ul>
          <li><Link to="/">Pagina Inicial</Link></li>
          <li><Link to="/Carros">Lista de Carros</Link></li>
          <li><Link to="/Sobre">sobre</Link></li>
        </ul> */}

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Carros" element={<Carros/>}></Route>
          <Route path="/Sobre" element={<Sobre/>}></Route>
        </Routes>
        </BrowserRouter>
      </header>
      <body>
        
      </body>
    </div>
  )
}

export default App

/* `para correr em tempo real enquanto coda` is a comment written in Portuguese that suggests running
the code in real-time while coding. It also provides a command `npm run dev` to achieve this. This
command is likely to start a development server that automatically updates the application as
changes are made to the code. */
// para correr em tempo real enquanto coda
// npm run dev

// para instalar a biblioteca do react-router-dom
// npm install react-router-dom@6

// biblioteca para importar alguns componentes q precisamos
//npm install react-bootstrap bootstrap@5.1.3

// podemos pegar itens prontos daqui: https://react-bootstrap.github.io/components/alerts