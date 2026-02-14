import React from 'react'
import { css } from '@styled-system/css'
import InfoHeader from '@/components/InfoHeader';
import Field from './components/Field';

const ContenedorMain = css({
  width: '100%',
})

export default function ReservationPage() {
  return (
    <>
      <InfoHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
      <main className={ContenedorMain}>
        <Field />
      </main>
    </>
  )
}
