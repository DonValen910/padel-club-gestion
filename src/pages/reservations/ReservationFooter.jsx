import React from 'react'
import { css } from '@styled-system/css'
import { useNavigate } from 'react-router'

const FooterContenedor = css({
    width: '100%',
    display: 'flex',
    fontFamily: 'var(--fuente-montserrat)',
    fontWeight: 'bold',
    fontSize: '30px',
})

const BotonAtras = css({
    flex: 1,
    padding: '10px 0',
    backgroundColor: 'var(--color-verde)',
    cursor: 'pointer',
})

export default function ReservationFooter() {
    const navigate = useNavigate();

    return (
        <footer className={FooterContenedor}>
            <button className={BotonAtras} onClick={() => navigate('/day')}>Terminar</button>
        </footer>
    )
}
