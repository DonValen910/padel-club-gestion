export type SupplyCategory =
    | "Deporte"
    | "Indumentaria"
    | "Bebida"
    | "Comestible";

export interface Supply {
    id: string;
    name: string;
    price: number;
    category: SupplyCategory;
}

export const supplies: Supply[] = [
    // Deporte
    { id: "parri", name: "Parri", price: 15000, category: "Deporte" },
    { id: "pelotas", name: "Pelotas", price: 5000, category: "Deporte" },
    { id: "grip", name: "Grip", price: 4000, category: "Deporte" },
    { id: "grip-tape", name: "Grip Tape", price: 7000, category: "Deporte" },
    { id: "resina", name: "Resina", price: 6000, category: "Deporte" },
    { id: "pala-basica", name: "Pala básica", price: 500, category: "Deporte" },
    { id: "pala-premium", name: "Pala premium", price: 1000, category: "Deporte" },

    // Indumentaria
    { id: "remeras", name: "Remeras", price: 15000, category: "Indumentaria" },
    { id: "toallas", name: "Toallas", price: 15000, category: "Indumentaria" },
    { id: "medias", name: "Medias", price: 6000, category: "Indumentaria" },

    // Bebida
    { id: "agua", name: "Agua", price: 3000, category: "Bebida" },
    { id: "fresh", name: "Fresh", price: 3000, category: "Bebida" },
    { id: "coca-1l", name: "Coca Cola 1L", price: 4000, category: "Bebida" },
    { id: "coca-1-75l", name: "Coca Cola 1,75L", price: 5000, category: "Bebida" },
    { id: "gatorade-500", name: "Gatorade 500ml", price: 2000, category: "Bebida" },
    { id: "gatorade-1l", name: "Gatorade 1L", price: 5000, category: "Bebida" },
    { id: "heineken", name: "Heineken", price: 8000, category: "Bebida" },
    { id: "stellar", name: "Stellar", price: 8000, category: "Bebida" },
    { id: "miller", name: "Miller", price: 7000, category: "Bebida" },

    // Comestible
    { id: "papas", name: "Papas", price: 2000, category: "Comestible" },
    { id: "palitos", name: "Palitos", price: 2000, category: "Comestible" },
    { id: "mani", name: "Maní", price: 2000, category: "Comestible" },
    { id: "turron", name: "Turrón", price: 500, category: "Comestible" },
    { id: "alfajor", name: "Alfajor", price: 2000, category: "Comestible" },
];