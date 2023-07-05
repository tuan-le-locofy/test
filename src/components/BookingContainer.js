import { useMemo } from "react";
import styles from "./BookingContainer.module.css";
const BookingContainer = ({
  flightDetails,
  airlineDetails,
  flightPrice,
  originAirportCode,
  destinationAirportCode,
  originCity,
  destinationCity,
  classType,
  numberOfAdults,
  bookingPlatform,
  timeSinceBooking,
  propTextAlign,
}) => {
  const arrNameStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.bookingCard}>
      <div className={styles.airlinePrice}>
        <div className={styles.airline}>
          <img className={styles.airlinelogoIcon} alt="" src={flightDetails} />
          <div className={styles.singaporeAirlines}>{airlineDetails}</div>
        </div>
        <div className={styles.price}>{flightPrice}</div>
      </div>
      <div className={styles.locations}>
        <div className={styles.departure}>
          <div className={styles.depcode}>{originAirportCode}</div>
          <div className={styles.depname}>{destinationAirportCode}</div>
        </div>
        <img className={styles.flightIcon} alt="" src="/flight-icon.svg" />
        <div className={styles.arrival}>
          <div className={styles.depcode}>{originCity}</div>
          <div className={styles.arrname} style={arrNameStyle}>
            {destinationCity}
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/class-icon.svg" />
          <div className={styles.singaporeAirlines}>{classType}</div>
        </div>
        <div className={styles.class}>
          <img className={styles.classIcon} alt="" src="/calender.svg" />
          <div className={styles.singaporeAirlines}>{numberOfAdults}</div>
        </div>
      </div>
      <div className={styles.provider}>
        <div className={styles.singaporeAirlines}>
          <span>{`Booked on `}</span>
          <span className={styles.expedia}>{bookingPlatform}</span>
        </div>
        <div className={styles.timeago}>{timeSinceBooking}</div>
      </div>
    </div>
  );
};

export default BookingContainer;
