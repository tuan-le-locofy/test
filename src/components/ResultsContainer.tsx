import { FunctionComponent } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./ResultsContainer.module.css";

type ResultsContainerType = {
  hotelName?: string;
  hotelDescription?: string;
  roomType?: string;
  hotelReviews?: string;
  hotelRating?: string;
  hotelPrice?: string;
  hotelPricePerNight?: string;
};

const ResultsContainer: FunctionComponent<ResultsContainerType> = ({
  hotelName,
  hotelDescription,
  roomType,
  hotelReviews,
  hotelRating,
  hotelPrice,
  hotelPricePerNight,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={hotelName} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.result}>
            <div className={styles.bedInQuad}>{roomType}</div>
            <h3 className={styles.freehandLosAngeles}>{hotelDescription}</h3>
            <div className={styles.review}>
              <div className={styles.stars}>
                <img className={styles.vectorIcon} alt="" src={hotelPrice} />
                <div className={styles.div}>{hotelRating}</div>
              </div>
              <div className={styles.reviews}>{hotelReviews}</div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{hotelPricePerNight}</b>
            <div className={styles.night}>/night</div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonPosition="relative"
            primaryButtonWidth="164px"
            primaryButtonHeight="46px"
            primaryButtonCursor="pointer"
            primaryButtonBorder="none"
            primaryButtonPadding="0"
            primaryButtonBackgroundColor="transparent"
            primaryButtonTop="unset"
            primaryButtonLeft="unset"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
