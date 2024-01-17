import { useState } from "react";
import ConfessButton from "./confess-button";
import ConfessionDetail from "./confession-detail";
import ConfessionReason from "./confession-reason";
import ConfessionSubject from "./confession-subject";
import ConfessionSubmission from "./confession-submission";
import {
  JustTalk,
  MISDEMEANOURS,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

const ConfessionPage: React.FC = () => {
  const [subject, setSubject] = useState<string>("");
  const [subjectValid, setSubjectValid] = useState<boolean>(false);
  const [reason, setReason] = useState<MisdemeanourKind | JustTalk>(
    MISDEMEANOURS[0]
  );
  const [detail, setDetail] = useState<string>("");
  const [detailValid, setDetailValid] = useState<boolean>(false);

  const [submit, setSubmit] = useState<boolean>(false);

  const processConfessionClick = () => {
    // setSubmitted(true);
    console.log("Sumbitting confession");
  };

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
      <form>
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
        <ConfessButton
          enabled={subjectValid && detailValid}
          postConfession={processConfessionClick}
        />
        <ConfessionSubmission
          submit={submit}
          confession={{ subject: subject, details: detail, reason: reason }}
        />
      </form>
    </>
  );
};

export default ConfessionPage;
