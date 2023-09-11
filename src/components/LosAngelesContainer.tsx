import { FunctionComponent } from "react";
import Pilldefault from "./Pilldefault";
import styles from "./LosAngelesContainer.module.css";
const LosAngelesContainer: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.title}>
          <h1 className={styles.staysInLos}>Stays in Los Angeles</h1>
          <div className={styles.options}>
            <Pilldefault
              beds="Recommended"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="#fff"
              bedsColor="#1262af"
            />
            <Pilldefault
              beds="Price"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="transparent"
              bedsColor="#fff"
            />
            <Pilldefault
              beds="Rating"
              pilldefaultPosition="unset"
              pilldefaultBackgroundColor="transparent"
              bedsColor="#fff"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LosAngelesContainer;
