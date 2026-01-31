import { css } from '@styled-system/css';

const ChipsDefault = css({
    width: '80px',
    height: '40px',
    borderRadius: '1.25rem',
    color: 'var(--color-blanco)',
    border: '1px solid var(--color-blanco)',
    display: 'grid',
    placeItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
})

const ChipsSelected = css({
    backgroundColor: 'var(--color-blanco)',
    color: 'var(--color-negro)'
})

function Chips({ fecha, isSelected, onSelect }) {
    return (
        <div 
            className={isSelected ? `${ChipsDefault} ${ChipsSelected}` : ChipsDefault}
            onClick={onSelect}
        >
            {fecha}
        </div>
    );
}

export default Chips;