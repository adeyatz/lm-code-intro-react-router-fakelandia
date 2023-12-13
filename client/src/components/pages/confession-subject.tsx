interface subjectProps {
  subject: string;
  setSubject(subject: string): void;
  setSubjectValid(isValid: boolean): void;
}

const ConfessionSubject: React.FC<subjectProps> = ({
  subject,
  setSubject,
  setSubjectValid,
}) => {
  const isValid = validateConfessionSubject(subject);
  setSubjectValid(isValid);
  const borderColour = isValid ? "black" : "red";

  return (
    <label>
      Subject
      <input
        id="subject"
        type="text"
        style={{ borderColor: borderColour }}
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
    </label>
  );
};

const validateConfessionSubject = (subject: string): boolean => {
  return !(subject.trim().length < 5 || subject.trim().match(/[^a-zA-Z0-9 ]/));
};

export default ConfessionSubject;
