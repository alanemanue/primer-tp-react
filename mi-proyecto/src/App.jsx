import { useState } from 'react'
import Header from './components/Header/Header'
import Formulario from './components/Formulario/Formulario'
import ListadoCitas from './components/ListadoCitas/ListadoCitas'
import './App.css'

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2025-04-21",
      hora: "08:00",
      sintomas: "No come"
    }
  ])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            <ListadoCitas citas={citas} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App