
import './ListadoCitas.css'
import Cita from '../Cita/Cita'

const ListadoCitas = ({ citas }) => {
  return (
    <div>
      <h2>Administra tus citas</h2>
      {citas.map(cita => (
        <Cita 
          key={cita.id}
          mascota={cita.mascota}
          propietario={cita.propietario}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  )
}

export default ListadoCitas