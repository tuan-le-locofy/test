import { FunctionComponent } from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import styles from "./SearchFilterContainer.module.css";
const SearchFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsParent}>
        <div className={styles.results}>10 out of 177 Results</div>
        <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      </div>
      <div className={styles.stops}>
        <h3 className={styles.results1}>Stops</h3>
        <div className={styles.frame}>
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="1 Stop"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="2 Stops"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
        </div>
      </div>
      <div className={styles.stops}>
        <h3 className={styles.results2}>Booking Options</h3>
        <div className={styles.frame}>
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="Book on Fickleflight"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="Official Airline Websites"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
        </div>
      </div>
      <div className={styles.stops}>
        <h3 className={styles.results2}>Flight Experience</h3>
        <div className={styles.frame2}>
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="No overnight flights"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <FormControlLabel
            className={styles.component1formcheckbox}
            label="No long stop-overs"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
        </div>
      </div>
      <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      <div className={styles.airlines}>
        <h3 className={styles.results4}>Airlines</h3>
        <div className={styles.frame3}>
          <FormControlLabel
            label="Singapore Airlines"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <FormControlLabel
            label="Qatar Airways"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterContainer;
