interface subjectProps {
  subject: string;
  setSubject(subect: string): void;
  validate(subject: string): boolean;
}

const ConfessionSubject: React.FC<subjectProps> = ({
  subject,
  setSubject,
  validate,
}) => {
  const borderColour = validate(subject) ? "black" : "red";

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

export default ConfessionSubject;
