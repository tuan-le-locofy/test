import { FunctionComponent, useState } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SearchFormContainer.module.css";
const SearchFormContainer: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <header className={styles.searchFormSection}>
        <header className={styles.searchContainer}>
          <div className={styles.searchSection}>
            <div className={styles.title}>
              <h1 className={styles.whereAreYou}>Where are you off too?</h1>
            </div>
            <div className={styles.searchForm}>
              <nav className={styles.inputsRow}>
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
                    renderInput={(params: any) => (
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
                  <Autocomplete
                    className={styles.departureField}
                    sx={{ width: "100%" }}
                    disablePortal
                    options={[
                      "Clark (CRK)",
                      "Launceston (LST)",
                      "Kalibo (KLO)",
                      "Colombo CMB",
                      "Melbourne (AVV)",
                      "Los Angeles (LA)",
                    ]}
                    renderInput={(params: any) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Arrival"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Los Angeles (LA)"
                    size="medium"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <div className={styles.departureField}>
                    <DatePicker
                      label="Date"
                      value={dateFieldDateTimePickerValue}
                      onChange={(newValue: any) => {
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
              </nav>
              <div className={styles.buttonGroup}>
                <button className={styles.searchFlightsButton}>
                  <div className={styles.button}>Search flights</div>
                </button>
              </div>
            </div>
          </div>
        </header>
      </header>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
