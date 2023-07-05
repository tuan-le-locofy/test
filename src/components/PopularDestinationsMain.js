import TravelContainer from "./TravelContainer";
import styles from "./PopularDestinationsMain.module.css";
const PopularDestinationsMain = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <a className={styles.viewAllTop} href="#">
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright6.svg"
          />
        </a>
      </div>
      <div className={styles.cardsContainer}>
        <TravelContainer
          destinationPrice="/unsplashnnzkznywhau@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <TravelContainer
          destinationPrice="/unsplashyc8qqp50bda@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="74.7px"
          propWidth1="74.01px"
          propLeft="35.43px"
        />
        <TravelContainer
          destinationPrice="/unsplashltnpejwdsay@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="67.97px"
          propWidth1="67.97px"
          propLeft="28.7px"
        />
        <TravelContainer
          destinationPrice="/unsplashm0oiyn5u8zm@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="75.22px"
          propWidth1="75.22px"
          propLeft="35.95px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright7.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsMain;
