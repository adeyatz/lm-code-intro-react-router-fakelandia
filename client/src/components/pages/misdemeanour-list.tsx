import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";

const MisdemeanourList: React.FC<{ misdemeanours: Misdemeanour[] }> = ({
  misdemeanours,
}) => {
  return (
    <div className="grid-container">
      {misdemeanours.map((misdemeanour, index) => (
        <>
          <div className="grid-item">{misdemeanour.citizenId}</div>
          <div className="grid-item">{misdemeanour.date}</div>
          <div className="grid-item">
            {addEmojiToMisdemeanour(misdemeanour.misdemeanour)}
          </div>
          <div className="grid-item">
            <img src={`https://picsum.photos/100/80?random=${index}`} />;
          </div>
        </>
      ))}
    </div>
  );
};

const addEmojiToMisdemeanour = (typeOfMisdemeanour: MisdemeanourKind) => {
  switch (typeOfMisdemeanour) {
    case "rudeness":
      return typeOfMisdemeanour + " 🤪";

    case "lift":
      return typeOfMisdemeanour + " 🗣";

    case "vegetables":
      return typeOfMisdemeanour + " 🥗";

    case "united":
      return typeOfMisdemeanour + " 😈";
  }
};

export default MisdemeanourList;
