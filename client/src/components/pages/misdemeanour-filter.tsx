import { MISDEMEANOURS } from "../../types/misdemeanours.types";
import { useState } from "react";

const MisdemeanourFilter: React.FC = () => {
  const ALL = "all";
  const [filterValue, setFilterValue] = useState(ALL);

  return (
    <div className="filter">
      <label>
        Filter
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option key={0} value={ALL}>
            {ALL}
          </option>
          {MISDEMEANOURS.map((option, index) => (
            <option key={index + 1} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MisdemeanourFilter;
