import { OPTION_ALL } from "./misdemeanour-filter";
import MisdemeanourFilter from "./misdemeanour-filter";
import MisdemeanourList from "./misdemeanour-list";
import { useState } from "react";

const Misdemeanour: React.FC = () => {
  const [filterValue, setFilterValue] = useState(OPTION_ALL);

  const handleFilterChange = (value: string) => {
    console.log(value);
    setFilterValue(value);
  };

  return (
    <>
      <MisdemeanourFilter
        setFilterValue={handleFilterChange}
        filterValue={filterValue}
      />
      <MisdemeanourList />
    </>
  );
};
export default Misdemeanour;
