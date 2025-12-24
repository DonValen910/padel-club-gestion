import { css } from '../styled-system/css'
import Card from './components/Card.jsx'
import Chips from './components/Chips.jsx'

const ContainerChips = css({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
})

function App() {
  const fechas = ['01-08', '09-15', '16-22', '23-31'];

  return (
    <>
      <div className={ContainerChips}>
        {fechas.map((fecha, index) => (
          <Chips key={index} fecha={fecha} />
        ))}
      </div>
      <Card TipoEstado={"Terminado"} Fecha={"14, Dic"} />
    </>
  )
}

export default App
