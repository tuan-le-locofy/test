import { FunctionComponent } from "react";
import Header from "../components/Header";
import LosAngelesContainer from "../components/LosAngelesContainer";
import HotelResultsContainer from "../components/HotelResultsContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import styles from "./HotelsPage.module.css";
const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <WeeklyUpdatesContainer
        imageId="/logo1.svg"
        imageSize="/social-icons1.svg"
      />
    </div>
  );
};

export default HotelsPage;
