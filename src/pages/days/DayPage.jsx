import DayHeader from "./DayHeader";
import DayFooter from "./DayFooter";
import BotonFiltro from "./components/BotonFiltro";

export default function DayPage() {
  return (
    <>
      <DayHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
      <BotonFiltro />
      <DayFooter />
    </>
  )
}
