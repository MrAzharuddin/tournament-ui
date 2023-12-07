import { api } from "@/http/axios";
import { cache } from "react";

export const getAllTournaments = cache(async () => {
  try {
    const response = await api.get("/tournaments/all");
    return response;
  } catch (error) {
    throw new Error(error);
  }
});
