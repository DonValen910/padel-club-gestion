import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import dayjs from "dayjs";
import { css } from "@styled-system/css";
import Card from "./components/Card.jsx";
import Chips from "./components/Chips.jsx";
import Select from "./components/Select.jsx";
import DayPage from "./pages/days/DayPage.jsx";
import ReservationFormPage from "./pages/reservations/ReservationPage.jsx";
import { getDayByMonth } from "./services/day.js";

const ContainerChips = css({
  display: "flex",
  gap: "1rem",
});

function App() {
  // Función para calcular los rangos de días según el mes y año
  const calcularRangosDias = (month, year) => {
    const diasEnMes = dayjs().month(month).year(year).daysInMonth();
    const diasPorChip = Math.ceil(diasEnMes / 4);
    const rangos = [];

    for (let i = 0; i < 4; i++) {
      const inicio = i * diasPorChip + 1;
      const fin = Math.min((i + 1) * diasPorChip, diasEnMes);
      rangos.push(
        `${String(inicio).padStart(2, "0")}-${String(fin).padStart(2, "0")}`,
      );
    }

    return rangos;
  };

  const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [fechas, setFechas] = useState(() =>
    calcularRangosDias(dayjs().month(), dayjs().year()),
  );
  const [selectedChip, setSelectedChip] = useState(null);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDays() {
      setLoading(true);
      setError(null);
      try {
        const data = await getDayByMonth(selectedYear, selectedMonth);
        setDays(data);
      } catch (err) {
        setError("Error al cargar los días");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDays();
  }, [selectedMonth, selectedYear]);

  // Manejar cambios de fecha desde Select
  const handleDateChange = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
    setFechas(calcularRangosDias(month, year));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
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
              {loading && <p style={{ color: "white" }}>Cargando...</p>}
              {error && <p style={{ color: "red" }}>{error}</p>}
              {!loading &&
                !error &&
                days.map((day) => (
                  <Card
                    key={day.id}
                    TipoEstado={day.status}
                    Fecha={dayjs(day.date).format("D, MMM")}
                    reservations={day.reservations}
                  />
                ))}
              {!loading && !error && days.length === 0 && (
                <p style={{ color: "white" }}>
                  No hay días registrados este mes
                </p>
              )}
            </main>
          </>
        }
      />
      <Route path="/day" element={<DayPage />} />
      <Route path="/reservation" element={<ReservationFormPage />} />
    </Routes>
  );
}

export default App;
