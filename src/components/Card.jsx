import { css } from '../../styled-system/css'
import FlechaDerecha from './icons/FlechaDerecha';

const CardStyles = css({
	minHeight: '50px',
	backgroundColor: 'var(--color-negro)',
	color: 'var(--color-blanco)',
	borderRadius: '1rem',
	width: '325px',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '1rem',
	overflow: 'hidden',
	cursor: 'pointer'
})

const CardEstadoBase = css({
	width: '60px',
	height: '50px',
})

const CardText = css({
	width: '100%',
	fontSize: '1.5rem',
	display: 'flex',
	justifyContent: 'space-between'
})

function Card({ TipoEstado, Fecha }) {
	let estadoColor = '';
	
	switch (TipoEstado) {
		case "Pendiente":
			estadoColor = css({
				backgroundColor: 'var(--color-naranja)',
			})
			break;

		case "Proximo":
			estadoColor = css({
				backgroundColor: 'var(--color-rojo)',
			})
			break;

		case "Terminado":
			estadoColor = css({
				backgroundColor: 'var(--color-verde)',
			})
			break;

		default:
			console.log("Tipo de estado no reconocido");
			break;
	}
	
	const CardEstadoColor = `${CardEstadoBase} ${estadoColor}`

	return (
		<>
			<button className={CardStyles}>
				<div className={CardEstadoColor}>{TipoEstado === "Pendiente" ? "Hoy" : ""}</div>
				<p className={CardText}><span>{TipoEstado}</span><span>{Fecha}</span></p>
				<figure><FlechaDerecha tamaño={34} color="var(--color-blanco)" /></figure>
			</button>
		</>
	);
}

export default Card;