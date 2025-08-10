import React, { useContext } from "react";
import { speakerList } from "../../../speakersData";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { ThemeContext } from "../context/ThemeContext";

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersList speakerList={speakerList} />
        </div>
      </div>
    </div>
  );
}

export default Speakers;
