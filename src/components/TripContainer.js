import { useMemo } from "react";
import styles from "./TripContainer.module.css";
const TripContainer = ({
  destinationPrice,
  destinationPriceRange,
  propBackgroundImage,
  propWidth,
  propDisplay,
  propWidth1,
}) => {
  const parisCardStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  return (
    <button className={styles.col1}>
      <div className={styles.pariscard} style={parisCardStyle}>
        <img
          className={styles.parisimageIcon}
          alt=""
          src="/parisimage@2x.png"
        />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationPrice}</b>
          <div className={styles.details}>
            <div className={styles.div} style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className={styles.from}>from</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TripContainer;
