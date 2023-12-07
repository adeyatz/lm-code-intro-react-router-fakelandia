import { MISDEMEANOURS } from "../../types/misdemeanours.types";

export const OPTION_ALL = "all";

const MisdemeanourFilter: React.FC<{
  filterValue: string;
  setFilterValue: (value: string) => void;
}> = ({ filterValue, setFilterValue }) => {
  return (
    <div className="filter">
      <label>
        Filter
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option key={0} value={OPTION_ALL}>
            {OPTION_ALL}
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
