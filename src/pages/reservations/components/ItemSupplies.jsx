import React, { useState } from 'react'
import { css } from '@styled-system/css'
import Plus from '@/components/icons/Plus'
import Subtract from '@/components/icons/Subtract'

const ItemContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'var(--color-blanco)',
  fontFamily: 'var(--fuente-work-sans)',
  fontSize: '22px',
  gap: '0.5rem',
})

const ContainerButtons = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  backgroundColor: 'var(--color-blanco)',
  color: 'var(--color-negro)',
  fontSize: '22px',
  width: 'fit-content',
  borderRadius: '1.5rem',
  padding: '5px 15px',
})

const ItemButton = css({
  cursor: 'pointer',
})

export default function ItemSupplies({ id, name, price, category }) {
  const [quantity, setQuantity] = useState(0)

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <li className={ItemContainer} data-id={id} data-category={category}>
      <span>{name}: ${price}</span>
      <div className={ContainerButtons}>
        <figure className={ItemButton} onClick={handleDecrement}>
          <Subtract tamaño={26} color="var(--color-negro)" />
        </figure>
        <span>{quantity}</span>
        <figure className={ItemButton} onClick={handleIncrement}>
          <Plus tamaño={26} color="var(--color-negro)" />
        </figure>
      </div>
    </li>
  )
}
