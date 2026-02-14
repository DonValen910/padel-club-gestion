import { useState } from 'react'
import { Routes, Route } from 'react-router'
import dayjs from 'dayjs'
import { css } from '@styled-system/css'
import Card from './components/Card.jsx'
import Chips from './components/Chips.jsx'
import Select from './components/Select.jsx'
import DayPage from './pages/days/DayPage.jsx'
import ReservationFormPage from './pages/reservations/ReservationFormPage.jsx'

const ContainerChips = css({
  display: 'flex',
  gap: '1rem',
})

function App() {
  // Función para calcular los rangos de días según el mes y año
  const calcularRangosDias = (month, year) => {
    const diasEnMes = dayjs().month(month).year(year).daysInMonth();
    const diasPorChip = Math.ceil(diasEnMes / 4);
    const rangos = [];

    for (let i = 0; i < 4; i++) {
      const inicio = i * diasPorChip + 1;
      const fin = Math.min((i + 1) * diasPorChip, diasEnMes);
      rangos.push(`${String(inicio).padStart(2, '0')}-${String(fin).padStart(2, '0')}`);
    }

    return rangos;
  };

  const [fechas, setFechas] = useState(() => {
    const mesActual = dayjs().month();
    const añoActual = dayjs().year();
    return calcularRangosDias(mesActual, añoActual);
  });

  // Manejar cambios de fecha desde Select
  const handleDateChange = (month, year) => {
    setFechas(calcularRangosDias(month, year));
  };

  const [selectedChip, setSelectedChip] = useState(null);


  return (
    <Routes>
      <Route path="/" element={
        <>
          <Select onDateChange={handleDateChange} />
          <div className={ContainerChips}>
            {fechas.map((fecha, index) => (
              <Chips 
                key={index} 
                fecha={fecha} 
                isSelected={selectedChip === index}
                onSelect={() => setSelectedChip(index)}
              />
            ))}
          </div>
          <main>
            <Card TipoEstado={"Pendiente"} Fecha={"14, Dic"} />
          </main>
        </>
      } />
      <Route path="/day" element={<DayPage />} />
      <Route path="/reservation" element={<ReservationFormPage />} />
    </Routes>
  )
}

export default App
