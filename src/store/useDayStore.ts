import { create } from 'zustand';

interface Reservation {
    id: string;
    nombre: string;
    cancha: number;
    hora_inicio: string;
    hora_fin: string;
    seña: number;
    total: number | null;
    metodo_pago: string | null;
    pagado: boolean;
}

interface Day {
    id: string;
    date: string;
    status: string;
    closed_at: string | null;
    reservations: Reservation[];
}

interface DayStore {
    selectedDay: Day | null;
    setSelectedDay: (day: Day) => void;
}

export const useDayStore = create<DayStore>((set) => ({
    selectedDay: null,
    setSelectedDay: (day) => set({ selectedDay: day }),
}));