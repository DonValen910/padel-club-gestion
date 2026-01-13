import { css } from '../../styled-system/css'

const InfoMiniStyles = css({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    color: 'var(--color-negro)',
    padding: '0.125rem 1rem',
    background: 'var(--color-azul)',
    borderRadius: '1rem'
})

function InfoMini() {
    return (
        <div className={InfoMiniStyles}>
            <span>Matías</span><span>17:30</span><span>S/S</span><span>Can 1</span>
        </div>
    );
}

export default InfoMini;