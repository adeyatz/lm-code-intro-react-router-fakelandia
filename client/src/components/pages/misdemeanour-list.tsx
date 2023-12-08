import {
  Misdemeanour,
  MisdemeanourKind,
} from "../../types/misdemeanours.types";
import React from "react";

const MisdemeanourList: React.FC<{ misdemeanours: Misdemeanour[] }> = ({
  misdemeanours,
}) => {
  return (
    <div className="grid-container">
      {misdemeanours.map((misdemeanour, index) => (
        <React.Fragment key={index}>
          <div className="grid-item">{misdemeanour.citizenId}</div>
          <div className="grid-item">{misdemeanour.date}</div>
          <div className="grid-item">
            {addEmojiToMisdemeanour(misdemeanour.misdemeanour)}
          </div>
          <div className="grid-item">
            <img
              src={`https://picsum.photos/100/80?random=${misdemeanour.citizenId}`}
            />
            ;
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const addEmojiToMisdemeanour = (typeOfMisdemeanour: MisdemeanourKind) => {
  let emoji: string;

  switch (typeOfMisdemeanour) {
    case "rudeness":
      emoji = "🤪";
      break;

    case "lift":
      emoji = "🗣";
      break;

    case "vegetables":
      emoji = "🥗";
      break;

    case "united":
      emoji = "😈";
      break;
  }
  return typeOfMisdemeanour + " " + emoji;
};

export default MisdemeanourList;
