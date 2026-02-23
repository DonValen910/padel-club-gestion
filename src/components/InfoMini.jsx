import { css } from '@styled-system/css'

const InfoMiniStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    color: 'var(--color-negro)',
    padding: '0.125rem 1rem',
    background: 'var(--color-blanco)',
    borderRadius: '1rem'
})

function InfoMini({ nombre, cancha, hora_inicio, hora_fin, seña }) {
    const horario = `${hora_inicio.slice(0, 5)}/${hora_fin.slice(0, 5)}`;
    const señaTexto = seña > 0 ? `S/${seña}` : `S/S`;
    
    return (
        <div className={InfoMiniStyles}>
            <span>{nombre}</span><span>{horario}</span><span>{señaTexto}</span><span>Can {cancha}</span>
        </div>
    );
}

export default InfoMini;