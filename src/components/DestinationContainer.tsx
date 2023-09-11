import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DestinationContainer.module.css";

type DestinationContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propWidth1?: CSSProperties["width"];
  propLeft?: CSSProperties["left"];
};

const DestinationContainer: FunctionComponent<DestinationContainerType> = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationName}</b>
          <div className={styles.details}>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
            <div className={styles.div} style={divStyle}>
              {destinationPriceRange}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
