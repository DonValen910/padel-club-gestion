import { css } from '@styled-system/css'
import DayFooter from "./DayFooter";
import BotonFiltro from "./components/BotonFiltro";
import ReservationCard from "./components/ReservationCard";
import InfoHeader from '@/components/InfoHeader';

const ContenedorCard = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
})

export default function DayPage() {
    return (
        <>
            <InfoHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
            <BotonFiltro />
            <main className={ContenedorCard}>
                <ReservationCard nombre={'Matias'} numCancha={1} seña={8000} horaInicio={"17:00"} horaFin={"18:00"} />
            </main>
            <DayFooter />
        </>
    )
}
