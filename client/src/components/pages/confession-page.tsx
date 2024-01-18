import { useState } from "react";
import ConfessButton from "./confess-button";
import ConfessionDetail from "./confession-detail";
import ConfessionReason from "./confession-reason";
import ConfessionSubject from "./confession-subject";

import {
  JustTalk,
  MISDEMEANOURS,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";
import { useConfessionForm } from "../../hooks/useConfessionForm";

const END_POINT = `http://localhost:8080/api/confess/`;

const ConfessionPage: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [subjectValid, setSubjectValid] = useState<boolean>(false);
  const [reason, setReason] = useState<MisdemeanourKind | JustTalk>(
    MISDEMEANOURS[0]
  );
  const [detail, setDetail] = useState<string>("");
  const [detailValid, setDetailValid] = useState<boolean>(false);

  const { handleSubmit, status, message } = useConfessionForm();

  if (status === "Success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "Error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <>
      <p>
        It's very difficult to catch people committing misdemeanours so
        <br /> we appreciate it when citizens confess to us directly
      </p>
      <p>
        However, if you're just having a hard day and need to vent then <br />
        you're welome to contact us here too. Up to you!
      </p>
      <form action={END_POINT} onSubmit={handleSubmit} method="POST">
        <span className="hint">
          Subject must be at least 5 characters (non special). Detail must be at
          least 30 characters (any)
        </span>
        <ConfessionSubject
          subject={subject}
          setSubject={setSubject}
          setSubjectValid={setSubjectValid}
        />
        <ConfessionReason reason={reason} setReason={setReason} />
        <ConfessionDetail
          detail={detail}
          setDetail={setDetail}
          setDetailValidity={setDetailValid}
        />
        <ConfessButton enabled={subjectValid && detailValid} />
      </form>
    </>
  );
};

export default ConfessionPage;
