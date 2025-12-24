import { css } from '../../styled-system/css'

const ChipsDefault = css({
    width: '80px',
    height: '40px',
    borderRadius: '1.25rem',
    color: 'var(--color-blanco)',
    border: '1px solid var(--color-blanco)',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer'
})

function Chips({ fecha }) {
    return (
        <div className={ChipsDefault}>
            {fecha}
        </div>
    );
}

export default Chips;