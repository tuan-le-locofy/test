import TripContainer from "./TripContainer";
import styles from "./PopularDestinationsContainer.module.css";
const PopularDestinationsContainer = () => {
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
        <TripContainer destinationPrice="Paris" destinationPriceRange="$699" />
        <TripContainer
          destinationPrice="Greece"
          destinationPriceRange="$1079"
          propBackgroundImage="unset"
          propDisplay="inline-block"
          propWidth1="unset"
        />
        <TripContainer
          destinationPrice="Norway"
          destinationPriceRange="$895"
          propBackgroundImage="unset"
          propDisplay="inline-block"
          propWidth1="90.92px"
        />
        <TripContainer
          destinationPrice="Tuscany"
          destinationPriceRange="$1245"
          propBackgroundImage="unset"
          propDisplay="inline-block"
          propWidth1="100.62px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
