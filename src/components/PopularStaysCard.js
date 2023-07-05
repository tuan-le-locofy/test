import styles from "./PopularStaysCard.module.css";
const PopularStaysCard = ({
  roomId,
  roomType,
  hotelName,
  roomPrice,
  roomDimensions,
  roomReviews,
  roomRating,
  roomImageUrl,
}) => {
  return (
    <div className={styles.hotelCard1}>
      <a className={styles.hotelCard} href="#">
        <img className={styles.unsplashhhrfsdwxxusIcon} alt="" src={roomId} />
        <div className={styles.stayDetails}>
          <div className={styles.entireBungalowParent}>
            <div className={styles.entireBungalow}>{roomType}</div>
            <b className={styles.matterhornSuites}>{hotelName}</b>
            <div className={styles.night}>{roomPrice}</div>
          </div>
          <img className={styles.videoIcon} alt="" src={roomDimensions} />
        </div>
        <div className={styles.rating}>
          <div className={styles.reviews}>{roomReviews}</div>
          <div className={styles.parent}>
            <div className={styles.div}>{roomRating}</div>
            <img className={styles.vectorIcon} alt="" src={roomImageUrl} />
          </div>
        </div>
        <button className={styles.moreDetailsButton}>
          <div className={styles.button}>More details</div>
        </button>
      </a>
    </div>
  );
};

export default PopularStaysCard;
