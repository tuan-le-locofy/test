import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import styles from "./HotelCardContainer.module.css";

type HotelCardContainerType = {
  roomDescription?: string;
  roomType?: string;
  hotelName?: string;
  roomPrice?: string;
  reviewCount?: string;
  rating?: string;
  roomImageUrl?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  roomDescription,
  roomType,
  hotelName,
  roomPrice,
  reviewCount,
  rating,
  roomImageUrl,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

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
            src={roomDescription}
          />
          <div className={styles.stayDetails} style={stayDetailsStyle}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>{roomType}</div>
              <b className={styles.matterhornSuites}>{hotelName}</b>
              <div className={styles.night}>{roomPrice}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src={roomImageUrl}
                style={vectorIconStyle}
              />
              <div className={styles.div}>{rating}</div>
            </div>
            <div className={styles.reviews}>{reviewCount}</div>
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

export default HotelCardContainer;
