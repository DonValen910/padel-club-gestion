import { useState } from 'react';
import { css } from '@styled-system/css'
import DayFooter from "./DayFooter";
import BotonFiltro from "./components/FilterButton";
import ReservationCard from "./components/ReservationCard";
import InfoHeader from '@/components/InfoHeader';
import FilterCard from './components/FilterCard';

const ContenedorCard = css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
})

export default function DayPage() {
    const [filtroActivo, setFiltroActivo] = useState(false);

    const toggleFiltro = () => {
        setFiltroActivo(!filtroActivo);
    };

    return (
        <>
            <InfoHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
            <BotonFiltro activo={filtroActivo} toggleFiltro={toggleFiltro} />
            <main className={ContenedorCard}>
                <ReservationCard nombre={'Matias'} numCancha={1} seña={8000} horaInicio={"17:00"} horaFin={"18:00"} />
                {filtroActivo && <FilterCard />}
            </main>
            <DayFooter />
        </>
    )
}
