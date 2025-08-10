import { useContext, useMemo } from 'react';
import SpeakerDetail from "./SpeakerDetail";
import { SpeakersDataContext } from '../contexts/SpeakersDataContext';
import useSpeakerSortAndFilter from "../hooks/useSpeakerSortAndFilter";
import { SpeakerMenuContext } from '../contexts/SpeakerMenuContext';

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const { speakingSaturday, speakingSunday, searchText } =
    useContext(SpeakerMenuContext);

  //if the list was not updated after editing a speaker on the list, this will force to refresh.
  // For my current test, this is not needed.
  const speakerListJson = JSON.stringify(speakerList);

  const speakerListFiltered = useMemo(
    () => useSpeakerSortAndFilter(
      speakerList,
      speakingSaturday,
      speakingSunday,
      searchText
    ), [speakingSaturday, speakingSunday, searchText, loadingStatus, speakerListJson]);

  if (loadingStatus === 'loading') {
    return <div className='card'>Loading...</div>
  }

  return (
    <>
      {speakerListFiltered.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
