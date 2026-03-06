import { useState } from "react";
import { css } from "@styled-system/css";
import dayjs from "dayjs";
import DayFooter from "./DayFooter";
import BotonFiltro from "./components/FilterButton";
import ReservationCard from "./components/ReservationCard";
import InfoHeader from "@/components/InfoHeader";
import FilterCard from "./components/FilterCard";
import { useDayStore } from "@/store/useDayStore";

const ContenedorCard = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
});

export default function DayPage() {
  const [filtroActivo, setFiltroActivo] = useState(false);
  const selectedDay = useDayStore((state) => state.selectedDay);
  const setSelectedReservation = useDayStore(
    (state) => state.setSelectedReservation,
  );

  if (!selectedDay) {
    return <p style={{ color: "white" }}>No hay día seleccionado</p>;
  }

  const fecha = dayjs(selectedDay.date).format("D, MMM");
  const reservations = selectedDay.reservations ?? [];

  return (
    <>
      <InfoHeader
        TipoEstado={selectedDay.status}
        Fecha={fecha}
        NumReservas={reservations.length}
      />
      <BotonFiltro
        activo={filtroActivo}
        toggleFiltro={() => setFiltroActivo(!filtroActivo)}
      />
      <main className={ContenedorCard}>
        {reservations.map((r) => (
          <ReservationCard
            key={r.id}
            nombre={r.nombre}
            numCancha={r.cancha}
            seña={r.seña}
            horaInicio={r.hora_inicio.slice(0, 5)}
            horaFin={r.hora_fin.slice(0, 5)}
            reservation={r}
          />
        ))}
        {filtroActivo && <FilterCard />}
      </main>
      <DayFooter onAdd={() => setSelectedReservation(null)} />
    </>
  );
}
