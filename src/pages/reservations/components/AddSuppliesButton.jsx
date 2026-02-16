import React from 'react'
import { css } from '@styled-system/css'
import Plus from '@/components/icons/Plus'

const ContenedorBoton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontFamily: 'var(--fuente-work-sans)',
  fontSize: '22px',
  padding: '8px 15px',
  margin: '20px auto',
  backgroundColor: 'var(--color-azul)',
  borderRadius: '24px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
})

export default function AddSuppliesButton({ onClick }) {
  return (
    <button className={ContenedorBoton} onClick={onClick}>
      <figure><Plus color="var(--color-negro)" tamaño={42} /></figure>
      Agregar insumos
    </button>
  )
}
