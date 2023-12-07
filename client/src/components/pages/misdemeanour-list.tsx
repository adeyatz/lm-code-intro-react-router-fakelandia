import { Misdemeanour } from "../../types/misdemeanours.types";

const MisdemeanourList: React.FC<{ misdemeanours: Misdemeanour[] }> = ({
  misdemeanours,
}) => (
  <div className="grid-container">
    <div className="grid-item">{misdemeanours[0].citizenId}</div>
    <div className="grid-item">{misdemeanours[0].date}</div>
    <div className="grid-item">{misdemeanours[0].misdemeanour}</div>
    <div className="grid-item">4</div>
  </div>
);

export default MisdemeanourList;
