import { useState } from "react";
import { Autocomplete, TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SearchContainer.module.css";
const SearchContainer = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchSection}>
        <div className={styles.bannerGradient} />
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner--background1@2x.png"
        />
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <div
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</div>
            <div className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div className={styles.searchForm}>
            <div className={styles.inputsRow}>
              <div className={styles.inputGroup}>
                <Autocomplete
                  className={styles.departureField}
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)Sanya (SYX)",
                  ]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                  size="medium"
                />
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.arrivalField}>
                  <div className={styles.input}>
                    <div className={styles.labelContainer}>
                      <div className={styles.arrival}>Arrival</div>
                    </div>
                    <div className={styles.active}>
                      <div className={styles.muiautocompletetag}>
                        <div className={styles.chip}>
                          <div className={styles.container}>
                            <div className={styles.avatar}>
                              <div className={styles.op}>F</div>
                            </div>
                            <div className={styles.typography}>
                              <div className={styles.chip1}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon}
                              alt=""
                              src="/cancel1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.chip}>
                          <div className={styles.container}>
                            <div className={styles.avatar}>
                              <div className={styles.op}>F</div>
                            </div>
                            <div className={styles.typography}>
                              <div className={styles.chip1}>Chip</div>
                            </div>
                            <img
                              className={styles.cancelIcon}
                              alt=""
                              src="/cancel2.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.losAngelesLa}>
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.inputGroup}>
                <div className={styles.departureField}>
                  <DatePicker
                    label="Date"
                    value={dateFieldDateTimePickerValue}
                    onChange={(newValue) => {
                      setDateFieldDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              variant="contained"
              name="search"
              id="search"
              color="primary"
            >
              Search flights
            </Button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchContainer;
