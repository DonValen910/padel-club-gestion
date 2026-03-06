import React, { useState } from "react";
import { css } from "@styled-system/css";
import InfoHeader from "@/components/InfoHeader";
import Field from "./components/Field";
import ReservationFooter from "./ReservationFooter";
import AddSuppliesButton from "./components/AddSuppliesButton";
import ListSupplies from "./components/ListSupplies";
import { useDayStore } from "@/store/useDayStore";
import dayjs from "dayjs";

const ContenedorMain = css({
  width: "100%",
});

export default function ReservationPage() {
  const [showSupplies, setShowSupplies] = useState(false);
  const selectedDay = useDayStore((state) => state.selectedDay);
  const selectedReservation = useDayStore((state) => state.selectedReservation);

  const isEditing = selectedReservation !== null;
  const fecha = selectedDay ? dayjs(selectedDay.date).format("D, MMM") : "";

  return (
    <>
      <InfoHeader
        TipoEstado={selectedDay?.status ?? ""}
        Fecha={fecha}
        NumReservas={selectedDay?.reservations?.length ?? 0}
      />
      <main className={ContenedorMain}>
        <Field reservation={isEditing ? selectedReservation : null} />
        <AddSuppliesButton onClick={() => setShowSupplies(!showSupplies)} />
        {showSupplies && (
          <ListSupplies
            reservationId={isEditing ? selectedReservation.id : null}
          />
        )}
      </main>
      <ReservationFooter />
    </>
  );
}
