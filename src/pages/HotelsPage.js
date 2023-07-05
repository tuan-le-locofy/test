import Header from "../components/Header";
import LAHeader from "../components/LAHeader";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./HotelsPage.module.css";
const HotelsPage = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LAHeader />
      <HotelResultsContainer />
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background@2x.png"
        imageId="174x33x2172373803"
        imageDimensionId="130x30x2249635244"
      />
    </div>
  );
};

export default HotelsPage;
