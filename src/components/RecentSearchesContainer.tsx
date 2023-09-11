import { FunctionComponent } from "react";
import styles from "./RecentSearchesContainer.module.css";

type RecentSearchesContainerType = {
  flightOrigin?: string;
  flightDestination?: string;
  flightOriginCode?: string;
  departureDate?: string;
  returnDate?: string;
};

const RecentSearchesContainer: FunctionComponent<
  RecentSearchesContainerType
> = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <b className={styles.sin}>{flightOrigin}</b>
        <img className={styles.flightIcons} alt="" src="/flight-icons.svg" />
        <b className={styles.lax}>{flightOriginCode}</b>
      </div>
      <div className={styles.departOn7Container}>
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
