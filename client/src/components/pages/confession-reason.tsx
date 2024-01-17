import {
  MISDEMEANOURS,
  JUST_TALK,
  MisdemeanourKind,
  JustTalk,
} from "../../types/misdemeanours.types";

interface reasonProps {
  reason: MisdemeanourKind | JustTalk;
  setReason(reason: MisdemeanourKind | JustTalk): void;
}

const ConfessionReason: React.FC<reasonProps> = ({ reason, setReason }) => {
  const reasons = [...MISDEMEANOURS, JUST_TALK];
  return (
    <label>
      Reason
      <select
        value={reason}
        id="reason"
        onChange={(e) =>
          setReason(e.target.value as MisdemeanourKind | JustTalk)
        }
      >
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
