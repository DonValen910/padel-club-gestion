import React from 'react'
import { css } from '../../../../styled-system/css';
import FlechaAbajo from '../../../components/icons/FlechaAbajo';

const ReservaCardContenedor = css({
    width: '300px',
    minWidth: '250px',
    backgroundColor: 'var(--color-negro)',
    color: 'var(--color-blanco)',
    border: '1px solid var(--color-blanco)',
    borderRadius: '1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '.5rem',
    padding: '10px 15px'
})

const ReservaCardTitulo = css({
    fontFamily: 'var(--fuente-montserrat)',
    fontWeight: 'bold',
    fontSize: '1.5rem'
})

const ReservaCardDetalles = css({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontSize: '1.25rem'
})

const ReservaCardHorario = css({
    fontWeight: 'bold',
    fontFamily: 'var(--fuente-montserrat)',
    fontSize: '1.5rem'
})

const ReservaCardLineDivisoria = css({
    width: '100%',
    height: '1px',
    backgroundColor: 'var(--color-blanco)'
})

const ReservaCardSeccionPieDePagina = css({
    width: '100%',
})

const ReservaCardIconoExpandir = css({
    width: '100%',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer'
})

export default function ReservationCard({ nombre, numCancha, seña, horaInicio, horaFin }) {
    const horario = `${horaInicio} - ${horaFin}`;

    return (
        <div className={ReservaCardContenedor}>
            <h2 className={ReservaCardTitulo}>{nombre}</h2>
            <div className={ReservaCardDetalles}><span>Cancha: {numCancha}</span><span>S: {seña}</span></div>
            <span className={ReservaCardHorario}>{horario}</span>
            <span className={ReservaCardLineDivisoria}></span>
            <figure className={ReservaCardIconoExpandir}>
                <FlechaAbajo tamaño={42} color="var(--color-blanco)" />
            </figure>
        </div>
    )
}
