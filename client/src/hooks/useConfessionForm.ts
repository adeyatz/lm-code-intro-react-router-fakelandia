import { useState } from "react";
import { ConfessionResponse } from "../types/confession.types.ts";

export type postStatus = "Error" | "Submitting" | "Success" | "";

export function useConfessionForm() {
  // const [confessionResponse, setConfessionResponse] =
  //   useState<ConfessionResponse>();
  const [status, setStatus] = useState<postStatus>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    setStatus("Submitting");
    setMessage("");

    const endPoint = target.action;
    console.log("Endpoint:" + endPoint);

    const ConfessionInput = {
      subject: target.subject.value,
      details: target.details.value,
      reason: target.reason.value,
    };

    console.log(
      ConfessionInput.subject,
      ConfessionInput.details,
      ConfessionInput.reason
    );

    try {
      console.log("open ✔");

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: target.subject.value,
          details: target.details.value,
          reason: target.reason.value,
        }),
      };

      const response = await fetch(endPoint, requestOptions);

      if (!response.ok) {
        setStatus("Error");
        setMessage("Response error");
      }

      const json: ConfessionResponse = await response.json();
      console.log(json.success, json.justTalked, json.message);
      setStatus(json.success ? "Success" : "Error");
      setMessage(json.message);
      if (json.success && !json.justTalked) {
        setMessage(json.message + " - add confession to Misdemeanours");
      }
      console.log("close ❌");
    } catch (err) {
      setStatus("Error");
      setMessage("Failed to send confession");
    }
  };

  return { handleSubmit, status, message };
}
