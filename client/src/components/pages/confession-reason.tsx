import { MISDEMEANOURS, JUST_TALK } from "../../types/misdemeanours.types";

interface reasonProps {
  reason: string;
  setReason(reason: string): void;
}

const ConfessionReason: React.FC<reasonProps> = ({ reason, setReason }) => {
  const reasons = [...MISDEMEANOURS, JUST_TALK];
  return (
    <label>
      Reason
      <select value={reason} onChange={(e) => setReason(e.target.value)}>
        {reasons.map((reason, index) => (
          <option key={index} value={reason}>
            {reason}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ConfessionReason;
