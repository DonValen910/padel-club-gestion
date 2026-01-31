import { css } from '../../styled-system/css'
import { useNavigate } from 'react-router'
import FlechaDerecha from './icons/FlechaDerecha';
import FlechaAbajo from './icons/FlechaAbajo';
import InfoMini from './InfoMini';

const ReservaCardContenedor = css({
	minHeight: '70px',
	backgroundColor: 'var(--color-negro)',
	color: 'var(--color-blanco)',
	border: '1px solid var(--color-blanco)',
	borderRadius: '1rem',
	textAlign: 'center',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	gap: '.5rem',
})

const ReservaCardIndicadorEstadoBase = css({
	width: '60px',
	height: '60px',
	margin: '5px',
	borderRadius: '1rem'
})

const ReservaCardTextoEncabezado = css({
	fontSize: '24px',
})

const ReservaCardLineDivisoria = css({
	width: '300px',
	height: '1px',
	backgroundColor: 'var(--color-blanco)'
})

const ReservaCardSeccionEncabezado = css({
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer'
})

const ReservaCardSeccionPieDePagina = css({
	width: '300px',
	display: 'grid',
	gap: '0.3125rem'
})

const ReservaCardInformacion = css({
    fontSize: '1.125rem',
})

const ReservaCardIconoExpandir = css({
	display: 'grid',
	placeItems: 'center',
	cursor: 'pointer'
})

function Card({ TipoEstado, Fecha }) {
	const navigate = useNavigate();
	let estadoColor = '';

	switch (TipoEstado) {
		case "Pendiente":
			estadoColor = css({
				backgroundColor: 'var(--color-naranja)',
				display: 'grid',
				placeItems: 'center',
				fontSize: '24px',
				fontWeight: 'bold',
				fontFamily: 'var(--fuente-montserrat)'
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

	const reservaCardIndicadorConEstado = `${ReservaCardIndicadorEstadoBase} ${estadoColor}`
	const Texto = `${TipoEstado} - ${Fecha}`;

	return (
		<>
			<button className={ReservaCardContenedor}>
				<div className={ReservaCardSeccionEncabezado} onClick={() => navigate('/day')}>
					<div className={reservaCardIndicadorConEstado}>{TipoEstado === "Pendiente" ? "Hoy" : ""}</div>
					<p className={ReservaCardTextoEncabezado}>{Texto}</p>
					<figure><FlechaDerecha tamaño={42} color="var(--color-blanco)" /></figure>
				</div>
				<span className={ReservaCardLineDivisoria}></span>
				<div className={ReservaCardSeccionPieDePagina}>
					<span className={ReservaCardInformacion}>Reservados: 7</span>
					<InfoMini />
					<figure className={ReservaCardIconoExpandir}><FlechaAbajo tamaño={42} color="var(--color-blanco)" /></figure>
				</div>
			</button>
		</>
	);
}

export default Card;