import { MISDEMEANOURS, Misdemeanour } from "../../types/misdemeanours.types";
import { OPTION_ALL } from "./misdemeanour-filter";
import MisdemeanourFilter from "./misdemeanour-filter";
import MisdemeanourList from "./misdemeanour-list";
import { useState } from "react";

const MisdemeanourPage: React.FC = () => {
  const [filterValue, setFilterValue] = useState(OPTION_ALL);

  const handleFilterChange = (value: string) => {
    console.log(value);
    setFilterValue(value);
  };

  const testMisdemeamour: Misdemeanour = {
    citizenId: 1234,
    misdemeanour: MISDEMEANOURS[0],
    date: "21 March 2021",
  };

  const testMisdemeanours = [
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
    testMisdemeamour,
  ];

  return (
    <>
      <MisdemeanourFilter
        setFilterValue={handleFilterChange}
        filterValue={filterValue}
      />
      <MisdemeanourList
        misdemeanours={
          filterValue != OPTION_ALL
            ? testMisdemeanours.filter(
                (misdemeanour) => misdemeanour.misdemeanour === filterValue
              )
            : testMisdemeanours
        }
      />
    </>
  );
};
export default MisdemeanourPage;
