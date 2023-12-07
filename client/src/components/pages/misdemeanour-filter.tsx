import { MISDEMEANOURS } from "../../types/misdemeanours.types";

const MisdemeanourFilter: React.FC = () => {
  return (
    <div className="filter">
      Filter
      <select>
        <option key="0">All</option>
        <option key="1">{MISDEMEANOURS[0]}</option>
        <option key="2">{MISDEMEANOURS[1]}</option>
        <option key="3">{MISDEMEANOURS[2]}</option>
        <option key="4">{MISDEMEANOURS[3]}</option>
        {/* { MISDEMEANOURS.forEach ((kind) => (
    <option key={kind.indexOf(kind)}>{kind}</option>)))
} */}
      </select>
    </div>
  );
};

export default MisdemeanourFilter;
