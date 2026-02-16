import React, { useState } from 'react'
import { css } from '@styled-system/css'
import InfoHeader from '@/components/InfoHeader';
import Field from './components/Field';
import ReservationFooter from './ReservationFooter';
import AddSuppliesButton from './components/AddSuppliesButton';
import ListSupplies from './components/ListSupplies';

const ContenedorMain = css({
  width: '100%',
})

export default function ReservationPage() {
  const [showSupplies, setShowSupplies] = useState(false);

  return (
    <>
      <InfoHeader TipoEstado="Terminado" Fecha="14, Dic" NumReservas={7} />
      <main className={ContenedorMain}>
        <Field />
        <AddSuppliesButton onClick={() => setShowSupplies(!showSupplies)} />
        {showSupplies && <ListSupplies />}
      </main>
      <ReservationFooter />
    </>
  )
}
