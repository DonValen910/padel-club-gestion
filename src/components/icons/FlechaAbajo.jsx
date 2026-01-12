import React from 'react'

const FlechaAbajo = ({ tamaño, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={tamaño} height={tamaño} fill="none" viewBox="0 0 32 32"><path stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25.333 12 16 20l-9.333-8"/></svg>
  )
}

export default FlechaAbajo