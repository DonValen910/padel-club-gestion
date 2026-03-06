import React from "react";
import { css } from "@styled-system/css";

const IndicadorEstadoBase = css({
  width: "100%",
  height: "80px",
  display: "grid",
  placeItems: "center",
  fontSize: "24px",
  fontWeight: "bold",
  fontFamily: "var(--fuente-montserrat)",
});

export default function InfoHeader({ TipoEstado, Fecha, NumReservas }) {
  const tipoEstadoCapitalizado =
    TipoEstado.charAt(0).toUpperCase() + TipoEstado.slice(1).toLowerCase();
  let estadoColor = "";

  switch (tipoEstadoCapitalizado) {
    case "Pendiente":
      estadoColor = css({
        backgroundColor: "var(--color-naranja)",
      });
      break;

    case "Proximo":
      estadoColor = css({
        backgroundColor: "var(--color-rojo)",
      });
      break;

    case "Terminado":
      estadoColor = css({
        backgroundColor: "var(--color-verde)",
      });
      break;

    default:
      console.log("Tipo de estado no reconocido");
      break;
  }

  const IndicadorConEstado = `${IndicadorEstadoBase} ${estadoColor}`;
  const Texto = `${tipoEstadoCapitalizado} - ${Fecha} · ${NumReservas} Reservas`;

  return <header className={IndicadorConEstado}>{Texto}</header>;
}
