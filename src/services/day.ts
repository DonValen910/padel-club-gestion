import { supabase } from "@/lib/supabase";
import dayjs from "dayjs";

export async function getDayByMonth(year: number, month: number) {
  const lastDay = dayjs().year(year).month(month).daysInMonth();

  const startDate = `${year}-${String(month + 1).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(lastDay).padStart(2, "0")}`;

  const { data, error } = await supabase
    .from("days")
    .select(
      `*,
        reservations(
            id,
            nombre,
            cancha,
            hora_inicio,
            hora_fin,
            seña
        )`,
    )
    .gte("date", startDate)
    .lte("date", endDate)
    .order("date", { ascending: true });

  if (error) throw error;
  return data;
}
