import React from 'react';
import IconConfiguracion from '@/components/icons/Configuracion';
import { css, cx } from '@styled-system/css';

const BotonFiltroEstilo = css({
    backgroundColor: 'var(--color-negro)',
    color: 'var(--color-blanco)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontFamily: 'var(--fuente-work-sans)',
    fontSize: '22px',
    padding: '5px 15px',
    border: '1px solid var(--color-blanco)',
    borderRadius: '24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
});

const BotonFiltroEstiloActivo = css({
    backgroundColor: 'var(--color-blanco)',
    color: 'var(--color-negro)',
})

export default function BotonFiltro({ activo, toggleFiltro }) {
    return (
        <button 
            className={cx(BotonFiltroEstilo, activo && BotonFiltroEstiloActivo)} 
            onClick={toggleFiltro}
        >
            <IconConfiguracion color={activo ? 'var(--color-negro)' : 'var(--color-blanco)'} tamaño={30} />
            Filtro
        </button>
    )
}
