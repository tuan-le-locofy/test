import { FunctionComponent, useMemo, type CSSProperties } from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./ResultsCardContainer.module.css";

type ResultsCardContainerType = {
  roomSize?: string;
  roomType?: string;
  hotelName?: string;
  roomPrice?: string;
  roomDimensions?: string;

  /** Style props */
  propCursor?: CSSProperties["cursor"];
};

const ResultsCardContainer: FunctionComponent<ResultsCardContainerType> = ({
  roomSize,
  roomType,
  hotelName,
  roomPrice,
  roomDimensions,
  propCursor,
}) => {
  const videoIconStyle: CSSProperties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={roomSize} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.resultAndVideo}>
            <div className={styles.kingBedStandard}>{roomType}</div>
            <h3 className={styles.holidayInnExpre}>{hotelName}</h3>
            <div className={styles.review}>
              <div className={styles.stars}>
                <img className={styles.vectorIcon} alt="" src={roomPrice} />
                <div className={styles.div}>4.7</div>
              </div>
              <div className={styles.reviews}>(1,136 reviews)</div>
            </div>
          </div>
          <img
            className={styles.videoIcon}
            alt=""
            src={roomDimensions}
            style={videoIconStyle}
          />
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s286}>$S 286</b>
            <div className={styles.night}>/night</div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonPosition="relative"
            primaryButtonWidth="164px"
            primaryButtonHeight="46px"
            primaryButtonCursor="pointer"
            primaryButtonBorder="none"
            primaryButtonPadding="0"
            primaryButtonBackgroundColor="transparent"
            primaryButtonTop="unset"
            primaryButtonLeft="unset"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsCardContainer;
