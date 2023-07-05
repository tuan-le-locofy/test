import { useMemo } from "react";
import styles from "./HotelCardContainer.module.css";
const HotelCardContainer = ({
  roomDescription,
  roomType,
  roomPrice,
  roomReviews,
  hotelRating,
  hotelName,
  roomDimensions,
  propWidth,
  propRight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.hotelCard2}>
      <a className={styles.hotelCard} href="#">
        <img
          className={styles.unsplashtsn8bpopveoIcon}
          alt=""
          src={roomDescription}
        />
        <div className={styles.stayDetails}>
          <div className={styles.storyBeachfrontSuiteParent}>
            <div className={styles.storyBeachfrontSuite}>{roomType}</div>
            <b className={styles.discoveryShores}>{roomPrice}</b>
            <div className={styles.night}>{roomReviews}</div>
          </div>
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{hotelRating}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{hotelName}</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src={roomDimensions}
              style={vectorIconStyle}
            />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardContainer;
