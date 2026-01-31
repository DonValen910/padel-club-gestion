import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { css } from '@styled-system/css';

dayjs.locale("es");

const SelectContainer = css({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    color: 'var(--color-blanco)'
});

const SelectCard = css({
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--color-blanco)',
    backgroundColor: 'transparent',
    color: 'var(--color-blanco)',
    fontSize: '1rem',
    cursor: 'pointer',
})

function Select({ onDateChange }) {
    const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
    const [selectedYear, setSelectedYear] = useState(dayjs().year());

    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Generar años (5 años atrás hasta 1 año adelante)
    const currentYear = dayjs().year();
    const years = Array.from({ length: 7 }, (_, i) => currentYear - 5 + i);

    const handleMonthChange = (e) => {
        const newMonth = Number(e.target.value);
        setSelectedMonth(newMonth);
        if (onDateChange) {
            onDateChange(newMonth, selectedYear);
        }
    };

    const handleYearChange = (e) => {
        const newYear = Number(e.target.value);
        setSelectedYear(newYear);
        if (onDateChange) {
            onDateChange(selectedMonth, newYear);
        }
    };

    return (
        <div className={SelectContainer}>
            <select className={SelectCard} value={selectedMonth} onChange={handleMonthChange}>
                {months.map((month, index) => (
                    <option key={index} value={index}>
                        {month}
                    </option>
                ))}
            </select>

            <select className={SelectCard} value={selectedYear} onChange={handleYearChange}>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;