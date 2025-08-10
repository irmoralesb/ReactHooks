import SpeakerDetail from "./SpeakerDetail";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import { SpeakersDataContext, SpeakersDataProvider } from "../contexts/SpeakersDataContext";

function Inner({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const { speakerList } = useContext(SpeakersDataContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  return speakerRec ? (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}


export default function Speaker(props) {
  return (
    <SpeakersDataProvider>
      <Inner {...props} />
    </SpeakersDataProvider>
  )
}