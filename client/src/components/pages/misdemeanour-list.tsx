import { Misdemeanour } from "../../types/misdemeanours.types";

const MisdemeanourList: React.FC<{ misdemeanours: Misdemeanour[] }> = ({
  misdemeanours,
}) => {
  return (
    <div className="grid-container">
      {misdemeanours.map((misdemeanour, index) => (
        <>
          <div className="grid-item">{misdemeanour.citizenId}</div>
          <div className="grid-item">{misdemeanour.date}</div>
          <div className="grid-item">{misdemeanour.misdemeanour}</div>
          <div className="grid-item">
            <img src={`https://picsum.photos/100/80?random=${index}`} />;
          </div>
        </>
      ))}
    </div>
  );
};

export default MisdemeanourList;
