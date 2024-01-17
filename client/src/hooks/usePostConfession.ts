import { useState, useEffect } from "react";
import {
  ConfessionResponse,
  ConfessionInput,
} from "../types/confession.types.ts";

export type postStatus = "Error" | "Submitting" | "Success";

export function usePostConfession(
  endpoint: string,
  confession: ConfessionInput,
  submit: boolean
) {
  const [confessionResponse, setConfessionResponse] =
    useState<ConfessionResponse>();
  const [status, setStatus] = useState<postStatus>("Submitting");

  useEffect(() => {
    let ignore = false; // Using this flag should mean that although React calls the endpoint twice in Strict mode, hopefully its only rendered once!
    async function postConfession() {
      try {
        console.log("open ✔");

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ confession }),
        };

        const response = await fetch(endpoint, requestOptions);

        if (!response.ok) {
          setStatus("Error");
        }

        const json = await response.json();
        console.log(json as ConfessionResponse);
        if (!ignore) {
          console.log("response ❤");
          setConfessionResponse(json as ConfessionResponse);

          // TODO, if success is false, display the message
          // if success is true and justTalked is false, add confession to list of misdemeanours
          // if justTalked is true do nothing

          setStatus("Success");
        }
      } catch (err) {
        setStatus("Error");
      }
    }

    if (submit) {
      postConfession();
    }

    return () => {
      ignore = true;
      console.log("close ❌");
    };
  });

  return { confessionResponse, status };
}

// componentDidMount() {
//     // POST request using fetch with error handling
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title: 'React POST Request Example' })
//     };
//     fetch('https://reqres.in/invalid-url', requestOptions)
//         .then(async response => {
//             const isJson = response.headers.get('content-type')?.includes('application/json');
//             const data = isJson && await response.json();

//             // check for error response
//             if (!response.ok) {
//                 // get error message from body or default to response status
//                 const error = (data && data.message) || response.status;
//                 return Promise.reject(error);
//             }

//             this.setState({ postId: data.id })
//         })
//         .catch(error => {
//             this.setState({ errorMessage: error.toString() });
//             console.error('There was an error!', error);
//         });
// }
