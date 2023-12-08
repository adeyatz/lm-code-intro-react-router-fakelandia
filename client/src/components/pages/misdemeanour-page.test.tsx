import { MISDEMEANOURS, Misdemeanour } from "../../types/misdemeanours.types";

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
