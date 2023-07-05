import { useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./ResultsWrapper.module.css";
const ResultsWrapper = ({
  hotelRoomImageUrl,
  roomType,
  hotelName,
  roomPrice,
  roomSize,
  propCursor,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const videoIconStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.resultsCard}>
        <img
          className={styles.resultsImageIcon}
          alt=""
          src={hotelRoomImageUrl}
        />
        <div className={styles.resultsDetails}>
          <div className={styles.resultsTitle}>
            <div className={styles.resultAndVideo}>
              <div className={styles.kingBedStandard}>{roomType}</div>
              <b className={styles.holidayInnExpre}>{hotelName}</b>
              <div className={styles.review}>
                <div className={styles.reviews}>(1,136 reviews)</div>
                <div className={styles.stars}>
                  <div className={styles.div}>4.7</div>
                  <img className={styles.vectorIcon} alt="" src={roomPrice} />
                </div>
              </div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src={roomSize}
              onClick={openMatterhornPopup}
              style={videoIconStyle}
            />
          </div>
          <div className={styles.priceAndCta}>
            <div className={styles.pricing}>
              <b className={styles.s286}>$S 286</b>
              <div className={styles.night}>/night</div>
            </div>
            <button className={styles.viewDetailsButton}>
              <div className={styles.viewDetailsButtonChild} />
              <div className={styles.searchFlights}>View Details</div>
            </button>
          </div>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ResultsWrapper;
