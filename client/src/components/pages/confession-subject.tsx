interface subjectProps {
  subject: string;
  setSubject(subect: string): void;
}

const ConfessionSubject: React.FC<subjectProps> = ({ subject, setSubject }) => (
  <label>
    Subject
    <input
      id="subject"
      type="text"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
    />
  </label>
);

export default ConfessionSubject;
