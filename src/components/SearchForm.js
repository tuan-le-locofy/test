import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
const SearchForm = ({ button }) => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const navigate = useNavigate();

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchForm}>
        <div className={styles.formTitleGroup}>
          <b className={styles.searchFlights}>Search flights</b>
          <div className={styles.flightOptions}>
            <div className={styles.flightType}>
              <FormControlLabel
                className={styles.radio}
                label="Return"
                labelPlacement="end"
                control={<Radio size="medium" />}
              />
              <FormControlLabel
                className={styles.radio1}
                label="One-way"
                labelPlacement="end"
                control={<Radio color="primary" checked size="medium" />}
              />
            </div>
          </div>
        </div>
        <div className={styles.formInputsRow}>
          <div className={styles.inputsRow}>
            <Autocomplete
              className={styles.departureField}
              disablePortal
              options={[]}
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
              defaultValue="Singapore (SIN)"
              size="medium"
            />
            <Autocomplete
              className={styles.departureField}
              disablePortal
              options={[
                "Singapore - Changi (LAX)",
                "Ninoy Aquiono International Airport (NAIA",
                "Mactan International Airport (MIA)",
                "Clark International Airport (CIA)",
                "Charles de Gaulle Airport (CGA)",
              ]}
              renderInput={(params) => (
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
            <div className={styles.departureField}>
              <DatePicker
                label="Date"
                value={selectOutlinedDateTimePickerValue}
                onChange={(newValue) => {
                  setSelectOutlinedDateTimePickerValue(newValue);
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
          <div className={styles.buttonGroup}>
            <button
              className={styles.searchFlightsButton}
              onClick={onSearchFlightsButtonClick}
            >
              <div className={styles.button}>{button}</div>
            </button>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchForm;
