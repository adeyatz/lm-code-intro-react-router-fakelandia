import { useState, useEffect } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

export type fetchStatus = "Error" | "Loading" | "Success";

export function useFetchMisdemeanours(endpoint: string) {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const [status, setStatus] = useState<fetchStatus>("Loading");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          setStatus("Error");
          //   throw new Error(`Error Status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        setMisdemeanours(json.misdemeanours);
        setStatus("Success");
      } catch (err) {
        setStatus("Error");
      }
    }

    fetchData();
  });

  return { misdemeanours, status };
}
