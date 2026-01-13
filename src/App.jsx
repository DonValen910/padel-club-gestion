import { css } from '../styled-system/css'
import Card from './components/Card.jsx'
import Chips from './components/Chips.jsx'

const ContainerChips = css({
  display: 'flex',
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
      <main>
        <Card TipoEstado={"Terminado"} Fecha={"14, Dic"} />
      </main>
    </>
  )
}

export default App
