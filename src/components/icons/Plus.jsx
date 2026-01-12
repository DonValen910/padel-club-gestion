import React from 'react'

const Plus = ({ tamaño, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={tamaño} height={tamaño} fill="none" viewBox="0 0 32 32"><path fill={color} d="M16 28q-.566 0-.95-.384a1.3 1.3 0 0 1-.383-.95v-9.333H5.333q-.566 0-.949-.384A1.3 1.3 0 0 1 4 16q0-.565.384-.95.385-.383.95-.383h9.333V5.333q0-.566.384-.949T16 4t.95.384q.387.385.383.95v9.333h9.334q.566 0 .95.384T28 16q0 .566-.384.95a1.27 1.27 0 0 1-.95.383h-9.333v9.334q0 .566-.384.95A1.3 1.3 0 0 1 16 28"/></svg>
  )
}

export default Plus