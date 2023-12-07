import { MISDEMEANOURS, Misdemeanour } from "../../types/misdemeanours.types";
import { OPTION_ALL } from "./misdemeanour-filter";
import MisdemeanourFilter from "./misdemeanour-filter";
import MisdemeanourList from "./misdemeanour-list";
import { useState } from "react";

const MisdemeanourPage: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>(OPTION_ALL);

  const typeZeroMisdemeamour: Misdemeanour = {
    citizenId: 1234,
    misdemeanour: MISDEMEANOURS[0],
    date: "21 March 2021",
  };
  const typeOneMisdemeamour: Misdemeanour = {
    citizenId: 5678,
    misdemeanour: MISDEMEANOURS[1],
    date: "1 Jan 1900",
  };
  const testMisdemeanours = [
    typeZeroMisdemeamour,
    typeZeroMisdemeamour,
    typeZeroMisdemeamour,
    typeZeroMisdemeamour,
    typeOneMisdemeamour,
    typeOneMisdemeamour,
    typeOneMisdemeamour,
    typeOneMisdemeamour,
    typeOneMisdemeamour,
  ];

  const [getMisdemeanours, setMisdemeanours] =
    useState<Misdemeanour[]>(testMisdemeanours);

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
      <MisdemeanourList
        misdemeanours={
          filterValue != OPTION_ALL
            ? getMisdemeanours.filter(
                (misdemeanour) => misdemeanour.misdemeanour === filterValue
              )
            : getMisdemeanours
        }
      />
    </>
  );
};
export default MisdemeanourPage;
