import React from 'react'

const FlechaDerecha = ({ tamaño, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={tamaño} height={tamaño} viewBox="0 0 24 24"><path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m9 5l6 7l-6 7"/></svg>
  ) 
}

export default FlechaDerecha