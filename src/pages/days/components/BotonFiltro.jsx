import React, { useState } from 'react';
import IconConfiguracion from '../../../components/icons/Configuracion';
import { css, cx } from '../../../../styled-system/css';

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

export default function BotonFiltro() {
    const [activo, setActivo] = useState(false);

    const handleClick = () => {
        setActivo(!activo);
    };

    return (
        <button 
            className={cx(BotonFiltroEstilo, activo && BotonFiltroEstiloActivo)} 
            onClick={handleClick}
        >
            <IconConfiguracion color={activo ? 'var(--color-negro)' : 'var(--color-blanco)'} tamaño={30} />
            Filtro
        </button>
    )
}
