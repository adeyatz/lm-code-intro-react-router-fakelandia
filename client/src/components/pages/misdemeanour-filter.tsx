import { MISDEMEANOURS } from "../../types/misdemeanours.types";

export const OPTION_ALL = "all";

const MisdemeanourFilter: React.FC<{
  filterValue: string;
  setFilterValue: (value: string) => void;
}> = ({ filterValue, setFilterValue }) => {
  const filterOptions = [OPTION_ALL, ...MISDEMEANOURS];
  return (
    <div className="filter">
      <label>
        Filter
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          {filterOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default MisdemeanourFilter;
