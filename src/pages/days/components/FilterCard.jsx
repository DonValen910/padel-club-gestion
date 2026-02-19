import React, { useState } from "react";
import { css } from "@styled-system/css";

const ContenedorTarjeta = css({
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: "0.5rem",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: "var(--color-gris)",
  position: "relative",
});

const TituloCampo = css({
  color: "var(--color-negro)",
  fontWeight: "bold",
  fontFamily: "var(--fuente-montserrat)",
  fontSize: "1.25rem",
  display: "block",
  textAlign: "center",
});

const ContenedorOpciones = css({
  display: "flex",
  gap: "0.625rem",
});

const GrupoInput = css({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  width: "fit-content",
});

const ContenedorInput1 = css({
  gridArea: "1 / 1 / 2 / 5",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

const ContenedorInput2 = css({
  gridArea: "1 / 5 / 2 / 9",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

const ContenedorInput3 = css({
  gridArea: "2 / 1 / 3 / 5",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

const ContenedorInput4 = css({
  gridArea: "2 / 5 / 3 / 9",
  display: "flex",
  flexDirection: "column",
  gap: "0.25rem",
});

const Input = css({
  background: "var(--color-blanco)",
  padding: "0.5rem 1rem",
  borderRadius: "1.5rem",
  fontFamily: "var(--fuente-work-sans)",
  fontSize: "18px",
  transition: "all 0.3s ease",
});

const InputNumber = css({
  maxWidth: "150px",
});

const InputCheckbox = css({
  display: "none",
});

const InputCheckboxLabel = css({
  cursor: "pointer",
});

const InputCheckboxLabelChecked = css({
  backgroundColor: "var(--color-azul)",
});

export default function FilterCard() {
  const [inputCheckedCancha1, setInputCheckedCancha1] = useState(false);
  const [inputCheckedCancha2, setInputCheckedCancha2] = useState(false);
  const [inputCheckedCancha3, setInputCheckedCancha3] = useState(false);
  const [inputCheckedDepositWith, setInputCheckedDepositWith] = useState(false);
  const [inputCheckedDepositWithout, setInputCheckedDepositWithout] =
    useState(false);

  const toggleCancha1 = () => setInputCheckedCancha1((prev) => !prev);
  const toggleCancha2 = () => setInputCheckedCancha2((prev) => !prev);
  const toggleCancha3 = () => setInputCheckedCancha3((prev) => !prev);
  const toggleDepositWith = () => setInputCheckedDepositWith((prev) => !prev);
  const toggleDepositWithout = () =>
    setInputCheckedDepositWithout((prev) => !prev);
  return (
    <div className={`${ContenedorTarjeta}`}>
      <div className={ContenedorInput1}>
        <label className={TituloCampo} htmlFor="name">
          Nombre
        </label>
        <input
          className={Input}
          type="text"
          id="name"
          name="name"
          placeholder="Escribe nombre..."
        />
      </div>
      <div className={ContenedorInput2}>
        <span className={TituloCampo}>Horario</span>
        <div className={ContenedorOpciones}>
          <div className={GrupoInput}>
            <input
              className={`${Input} ${InputNumber}`}
              type="number"
              name="scheduleStarts"
              id="scheduleStarts"
              placeholder="Empieza"
            />
          </div>
          <div className={GrupoInput}>
            <input
              className={`${Input} ${InputNumber}`}
              type="number"
              name="scheduleEnds"
              id="scheduleEnds"
              placeholder="Termina"
            />
          </div>
        </div>
      </div>
      <div className={ContenedorInput3}>
        <span className={TituloCampo}>Cancha</span>
        <div className={ContenedorOpciones}>
          <div className={GrupoInput}>
            <input
              className={InputCheckbox}
              type="checkbox"
              name="cancha1"
              id="cancha1"
              checked={inputCheckedCancha1}
              onChange={toggleCancha1}
            />
            <label
              className={`${Input} ${InputCheckboxLabel} ${inputCheckedCancha1 ? InputCheckboxLabelChecked : ""}`}
              htmlFor="cancha1"
            >
              Cancha 1
            </label>
          </div>
          <div className={GrupoInput}>
            <input
              className={InputCheckbox}
              type="checkbox"
              name="cancha2"
              id="cancha2"
              checked={inputCheckedCancha2}
              onChange={toggleCancha2}
            />
            <label
              className={`${Input} ${InputCheckboxLabel} ${inputCheckedCancha2 ? InputCheckboxLabelChecked : ""}`}
              htmlFor="cancha2"
            >
              Cancha 2
            </label>
          </div>
          <div className={GrupoInput}>
            <input
              className={InputCheckbox}
              type="checkbox"
              name="cancha3"
              id="cancha3"
              checked={inputCheckedCancha3}
              onChange={toggleCancha3}
            />
            <label
              className={`${Input} ${InputCheckboxLabel} ${inputCheckedCancha3 ? InputCheckboxLabelChecked : ""}`}
              htmlFor="cancha3"
            >
              Cancha 3
            </label>
          </div>
        </div>
      </div>
      <div className={ContenedorInput4}>
        <span className={TituloCampo}>Seña</span>
        <div className={ContenedorOpciones}>
          <div className={GrupoInput}>
            <input
              className={InputCheckbox}
              type="checkbox"
              name="depositWith"
              id="depositWith"
              checked={inputCheckedDepositWith}
              onChange={toggleDepositWith}
            />
            <label
              className={`${Input} ${InputCheckboxLabel} ${inputCheckedDepositWith ? InputCheckboxLabelChecked : ""}`}
              htmlFor="depositWith"
            >
              Con seña
            </label>
          </div>
          <div className={GrupoInput}>
            <input
              className={InputCheckbox}
              type="checkbox"
              name="depositWithout"
              id="depositWithout"
              checked={inputCheckedDepositWithout}
              onChange={toggleDepositWithout}
            />
            <label
              className={`${Input} ${InputCheckboxLabel} ${inputCheckedDepositWithout ? InputCheckboxLabelChecked : ""}`}
              htmlFor="depositWithout"
            >
              Sin seña
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
