import { useState, useEffect } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

export type fetchStatus = "Error" | "Loading" | "Success";

export function useFetchMisdemeanours(endpoint: string) {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const [status, setStatus] = useState<fetchStatus>("Loading");

  useEffect(() => {
    let ignore = false; // Using this flag should mean that although React calls the endpoint twice in Strict mode, hopefully its only rendered once!
    async function fetchMisdemeanours() {
      try {
        console.log("open ✔");
        const response = await fetch(endpoint);

        if (!response.ok) {
          setStatus("Error");
        }

        const json = await response.json();
        console.log(json);
        if (!ignore) {
          console.log("render ❤");
          setMisdemeanours(json.misdemeanours);
          setStatus("Success");
        }
      } catch (err) {
        setStatus("Error");
      }
    }

    fetchMisdemeanours();

    return () => {
      ignore = true;
      console.log("close ❌");
    };
  }, [endpoint]);

  return { misdemeanours, status };
}
