import { useState } from "react";
import { usePostConfession } from "../../hooks/usePostConfession";
import { ConfessionInput } from "../../types/confession.types";

const CONFESSION_URL = `http://localhost:8080/api/confess/`;

interface submissionProps {
  submit: boolean;
  confession: ConfessionInput;
}

const ConfessionSubmission: React.FC<submissionProps> = ({
  submit,
  confession,
}) => {
  const { confessionResponse, status } = usePostConfession(
    CONFESSION_URL,
    confession,
    submit
  );
  // setSubmitted(false);

  return (
    <>
      {submit && <p> {status}</p>}
      {!submit && <p className="hint">Not submitted</p>}
    </>
  );
};
export default ConfessionSubmission;
