import seriesData from "../api/seriesData.json";
import { SeriesCards } from "./SeriesCards";
export const NetflixCards = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currElem) => (
        <SeriesCards key={currElem.id} data={currElem} />
      ))}
    </ul>
  );
};