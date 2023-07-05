import HeroContainer from "../components/HeroContainer";
import UpcomingFlightSectionContainer from "../components/UpcomingFlightSectionContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import SubscriptionContainer from "../components/SubscriptionContainer";
import styles from "./Homepage.module.css";
const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <UpcomingFlightSectionContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <SubscriptionContainer />
    </div>
  );
};

export default Homepage;
