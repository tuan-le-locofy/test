import { FunctionComponent } from "react";
import TopHeader from "./TopHeader";
import SearchSection from "./SearchSection";
import styles from "./HeroContainer.module.css";
const HeroContainer: FunctionComponent = () => {
  return (
    <div className={styles.heroSection}>
      <TopHeader />
      <SearchSection />
    </div>
  );
};

export default HeroContainer;
