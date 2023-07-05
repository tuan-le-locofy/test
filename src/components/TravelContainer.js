import { useMemo } from "react";
import styles from "./TravelContainer.module.css";
const TravelContainer = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const div1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.card1}>
      <div className={styles.unsplashnnzkznywhauParent}>
        <img
          className={styles.unsplashnnzkznywhauIcon}
          alt=""
          src={destinationPrice}
        />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationName}</b>
          <div className={styles.parent} style={groupDivStyle}>
            <div className={styles.div} style={div1Style}>
              {destinationPriceRange}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TravelContainer;
