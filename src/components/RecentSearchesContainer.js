import styles from "./RecentSearchesContainer.module.css";
const RecentSearchesContainer = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.fromDetails}>
          <b className={styles.sin}>{flightOrigin}</b>
        </div>
        <img className={styles.durationIcon} alt="" src="/duration.svg" />
        <div className={styles.toDetails}>
          <b className={styles.lax}>{flightOriginCode}</b>
        </div>
      </div>
      <div className={styles.departOn7Container}>
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
