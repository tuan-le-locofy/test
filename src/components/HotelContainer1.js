import { useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelContainer1.module.css";
const HotelContainer1 = ({
  hotelDescription,
  accommodationDescription,
  hotelName,
  hotelPrice,
  hotelRoomDimensions,
  hotelRating,
  hotelReviews,
  propFlex,
  propGap,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard1}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            alt=""
            src={hotelDescription}
          />
          <div className={styles.stayDetails} style={stayDetailsStyle}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>
                {accommodationDescription}
              </div>
              <b className={styles.matterhornSuites}>{hotelName}</b>
              <div className={styles.night}>{hotelPrice}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews}>{hotelReviews}</div>
            <div className={styles.parent}>
              <div className={styles.div}>{hotelRating}</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src={hotelRoomDimensions}
              />
            </div>
          </div>
          <button className={styles.moreDetailsButton}>
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelContainer1;
