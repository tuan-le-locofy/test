import { FormControlLabel, Checkbox } from "@mui/material";
import styles from "./SearchFilterContainer.module.css";
const SearchFilterContainer = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.resultsParent}>
          <div className={styles.results}>10 out of 177 Results</div>
          <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <div className={styles.stops}>
        <b className={styles.results1}>Stops</b>
        <FormControlLabel
          className={styles.component1formcheckbox}
          label="1 Stop"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          className={styles.component1formcheckbox1}
          label="2 Stops"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
      <div className={styles.bookingOptions}>
        <b className={styles.results2}>Booking Options</b>
        <FormControlLabel
          className={styles.component1formcheckbox}
          label="Book on Fickleflight"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
        <FormControlLabel
          className={styles.component1formcheckbox1}
          label="Official Airline Websites"
          labelPlacement="end"
          control={<Checkbox size="medium" />}
        />
      </div>
      <div className={styles.flightExperience}>
        <b className={styles.results3}>Flight Experience</b>
        <FormControlLabel
          className={styles.component1formcheckbox}
          label="No overnight flights"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
        <FormControlLabel
          className={styles.component1formcheckbox1}
          label="No long stop-overs"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
      </div>
      <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      <div className={styles.airlines}>
        <b className={styles.results4}>Airlines</b>
        <FormControlLabel
          className={styles.component1formcheckbox}
          label="Singapore Airlines"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
        <FormControlLabel
          className={styles.component1formcheckbox1}
          label="Qatar Airways"
          labelPlacement="end"
          control={<Checkbox color="primary" size="medium" />}
        />
      </div>
    </div>
  );
};

export default SearchFilterContainer;
