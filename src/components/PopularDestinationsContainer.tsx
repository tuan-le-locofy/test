import { FunctionComponent } from "react";
import DestinationContainer from "./DestinationContainer";
import styles from "./PopularDestinationsContainer.module.css";
const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationContainer
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <DestinationContainer
          destinationName="Greece"
          destinationPriceRange="$1079"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="unset"
        />
        <DestinationContainer
          destinationName="Norway"
          destinationPriceRange="$895"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="unset"
        />
        <DestinationContainer
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="unset"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon1} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
