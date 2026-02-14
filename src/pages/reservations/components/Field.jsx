import React from 'react'
import { css } from '@styled-system/css'

const ContenedorField = css({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    width: '100%',
    rowGap: '1.625rem',
});

const CardFieldInput = css({
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center',
    gap: '0.5rem',
    width: '100%',
    color: 'var(--color-blanco)',
    fontFamily: 'var(--fuente-work-sans)',
    fontSize: '20px'
})

const CardFieldInput1 = css({
    gridArea: '1 / 1 / 2 / 4',
})

const CardFieldInput2 = css({
    gridArea: '1 / 4 / 2 / 7'
})

const CardFieldInput3 = css({
    gridArea: '2 / 1 / 3 / 3'
})

const CardFieldInput4 = css({
    gridArea: '2 / 3 / 3 / 5'
})

const CardFieldInput5 = css({
    gridArea: '2 / 5 / 3 / 7'
})

const ContenedorFieldInput = css({
    borderRadius: '0.5rem',
    border: '1px solid var(--color-blanco)',
    padding: '0.5rem',
    fontSize: '20px'
})

export default function Field() {
    const labels = ["Nombre quien reservó", "Monto de seña", "Num cancha", "Empieza", "Termina"];
    const names = ["nombre", "seña", "numCancha", "horaInicio", "horaFin"];
    const fieldClasses = [CardFieldInput1, CardFieldInput2, CardFieldInput3, CardFieldInput4, CardFieldInput5];

    const handleTextInput = (e) => {
        // Solo permitir letras y espacios
        const value = e.target.value;
        e.target.value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, '');
    };

    const handleNumberInput = (e) => {
        // Prevenir caracteres no permitidos en números: -, . y ,
        if (e.key === '-' || e.key === '.' || e.key === ',' || e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    };

    const handleMontoInput = (e) => {
        // Eliminar cualquier carácter que no sea número
        const value = e.target.value;
        e.target.value = value.replace(/[^0-9]/g, '');
    };

    const handleCanchaInput = (e) => {
        // Solo permitir 1, 2 o 3
        if (e.key !== '1' && e.key !== '2' && e.key !== '3' && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            e.preventDefault();
        }
    };

    const handleCanchaLimitInput = (e) => {
        // Limitar a solo 1 carácter
        const value = e.target.value;
        if (value.length > 1) {
            e.target.value = value.slice(0, 1);
        }
    };

    const getInputProps = (index) => {
        const baseProps = {
            name: names[index],
            className: ContenedorFieldInput
        };

        switch (index) {
            case 0: // Nombre quien reservó
                return {
                    ...baseProps,
                    type: "text",
                    onInput: handleTextInput
                };
            case 1: // Monto de seña
                return {
                    ...baseProps,
                    type: "number",
                    min: "0",
                    max: "50000",
                    onKeyDown: handleNumberInput,
                    onInput: handleMontoInput
                };
            case 2: // Num cancha
                return {
                    ...baseProps,
                    type: "number",
                    min: "1",
                    max: "3",
                    maxLength: "1",
                    onKeyDown: handleCanchaInput,
                    onInput: handleCanchaLimitInput
                };
            case 3: // Empieza
            case 4: // Termina
                return {
                    ...baseProps,
                    type: "time"
                };
            default:
                return baseProps;
        }
    };

    return (
        <div className={ContenedorField}>
            {labels.map((label, index) => (
                <div key={label} className={`${CardFieldInput} ${fieldClasses[index]}`}>
                    <label>{label}</label>
                    <input {...getInputProps(index)} />
                </div>
            ))}
        </div>
    )
}
