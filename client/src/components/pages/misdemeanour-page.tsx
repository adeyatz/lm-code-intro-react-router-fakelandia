import { OPTION_ALL } from "./misdemeanour-filter";
import MisdemeanourFilter from "./misdemeanour-filter";
import MisdemeanourList from "./misdemeanour-list";
import { useFetchMisdemeanours } from "../../hooks/useFetchMisdemeanours";
import { useState } from "react";

const MISDEMEANOUR_URL = `http://localhost:8080/api/misdemeanours/`;
const MISDEMEANOUR_COUNT = 20;

const MisdemeanourPage: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>(OPTION_ALL);

  const handleFilterChange = (value: string) => {
    console.log(value);
    setFilterValue(value);
  };

  const { misdemeanours, status } = useFetchMisdemeanours(
    MISDEMEANOUR_URL + MISDEMEANOUR_COUNT
  );

  return (
    <>
      {status === "Error" && (
        <p style={{ color: "red" }}>Error Fetching Misdemeanours</p>
      )}
      {status === "Loading" && <p>Loading Misdemeanours...</p>}
      {status === "Success" && (
        <>
          <MisdemeanourFilter
            setFilterValue={handleFilterChange}
            filterValue={filterValue}
          />
          <MisdemeanourList
            misdemeanours={
              filterValue != OPTION_ALL
                ? misdemeanours.filter(
                    (misdemeanour) => misdemeanour.misdemeanour === filterValue
                  )
                : misdemeanours
            }
          />
        </>
      )}
    </>
  );
};
export default MisdemeanourPage;
