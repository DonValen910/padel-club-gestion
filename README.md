# 📌 Proyecto Gestión – Club de Pádel

## Contexto general

Aplicación web de gestión interna para un **club de pádel**, pensada para el uso diario en recepción.  
El sistema reemplaza el registro manual en papel por una solución digital rápida, clara y confiable.

El foco está puesto en la **operación diaria real**, donde el tiempo es limitado y los errores deben minimizarse.

---

## 🎯 Objetivo principal

Permitir al recepcionista:
- Visualizar los días del mes con su estado operativo.
- Gestionar reservas de canchas.
- Registrar consumos e insumos.
- Calcular automáticamente importes.
- Registrar métodos de pago.
- Cerrar el día con un resumen claro.

---

## 👤 Usuario principal

- Recepcionista del club
- Uso intensivo en momentos de alta demanda
- Necesidades clave:
    - Velocidad
    - Claridad visual
    - Flujo simple
    - Prevención de errores

---

## 🧭 Flujo general de uso

1. Ingreso a la aplicación.
2. Vista mensual con estado de cada día.
3. Acceso al detalle de un día.
4. Gestión de reservas:
    - Cliente
    - Cancha
    - Horarios
    - Seña
5. Registro de consumos mediante controles `+ / −`.
6. Cálculo automático del total.
7. Selección del método de pago.
8. Confirmación y cierre del día.

---

## 📅 Estados del día

- **Próximo**  
    Día futuro. Permite crear y editar reservas.
- **Pendiente (Hoy)**  
    Día activo. Permite gestión completa y cobros.
- **Terminado**  
    Día cerrado. Información en modo solo lectura.

---

## 🧩 Funcionalidades clave

- Gestión de días y estados.
- Gestión de reservas.
- Registro de insumos.
- Cálculo automático de totales.
- Registro de pagos (efectivo / transferencia).
- Resumen diario de caja.

---

## ⚠️ Manejo de errores y validaciones

- Confirmación obligatoria antes de cerrar un día.
- Validaciones mínimas:
    - Horarios
    - Cancha asignada
    - Montos correctos
- Prevención de modificaciones una vez cerrado el día.

---

## 🧪 Alcance inicial (MVP)

- Un único rol operativo.
- No se permite modificar días ya cerrados.
- Flujo simple y directo, sin lógica administrativa avanzada.

---

## 🧠 Decisiones de UX/UI

- Enfoque mobile-first.
- Dark mode para reducir fatiga visual.
- Estados representados por color y texto.
- Botones grandes y fáciles de interactuar.
- Flujo lineal: gestionar → cobrar → cerrar.

---

## 🛠️ Stack tecnológico

### Frontend
- Vite
- React
- styled-components
- React Router
- Zustand
- dayjs o date-fns

### Backend
- Supabase

### Deploy
- Vercel

### Herramientas
- ESLint
- Prettier

---

## 📱 Tipo de aplicación

- Web app responsive
- Uso principal en dispositivos móviles
- Posible evolución a PWA

---

## 🚀 Enfoque del proyecto

Proyecto real orientado a portfolio profesional.  
Se prioriza:
- Claridad
- Rapidez
- Uso práctico
- Escalabilidad controlada

> Sistema de gestión interna para club deportivo