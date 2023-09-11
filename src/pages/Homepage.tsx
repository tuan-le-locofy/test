import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./Homepage.module.css";
const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightSectionContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <WeeklyUpdatesContainer
        imageId="/logo.svg"
        imageSize="/social-icons.svg"
      />
    </div>
  );
};

export default Homepage;
