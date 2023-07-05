import styles from "./ResultsContainer.module.css";
const ResultsContainer = ({
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
            <b className={styles.freehandLosAngeles}>{hotelDescription}</b>
            <div className={styles.bedInQuad}>{roomType}</div>
            <div className={styles.review}>
              <div className={styles.reviews}>{hotelReviews}</div>
              <div className={styles.stars}>
                <div className={styles.div}>{hotelRating}</div>
                <img className={styles.vectorIcon} alt="" src={hotelPrice} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{hotelPricePerNight}</b>
            <div className={styles.night}>/night</div>
          </div>
          <button className={styles.viewDetailsButton}>
            <div className={styles.viewDetailsButtonChild} />
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
