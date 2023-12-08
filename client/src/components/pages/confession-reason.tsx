import { MISDEMEANOURS, JUST_TALK } from "../../types/misdemeanours.types";

const ConfessionReason: React.FC = () => {
  const reasons = [...MISDEMEANOURS, JUST_TALK];
  return (
    <label>
      Reason
      <select>
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
