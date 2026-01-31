import DayHeader from "./DayHeader";
import DayFooter from "./DayFooter";
import BotonFiltro from "./components/BotonFiltro";
import ReservationCard from "./components/ReservationCard";

export default function DayPage() {
  return (
    <>
      <DayHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
      <BotonFiltro />
      <main>
        <ReservationCard nombre={'Matias'} numCancha={1} seña={8000} horaInicio={"17:00"} horaFin={"18:00"} />
      </main>
      <DayFooter />
    </>
  )
}
