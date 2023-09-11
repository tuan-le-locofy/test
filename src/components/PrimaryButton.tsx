import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrimaryButton.module.css";

type PrimaryButtonType = {
  searchFlights?: string;

  /** Style props */
  primaryButtonPosition?: CSSProperties["position"];
  primaryButtonWidth?: CSSProperties["width"];
  primaryButtonHeight?: CSSProperties["height"];
  primaryButtonCursor?: CSSProperties["cursor"];
  primaryButtonBorder?: CSSProperties["border"];
  primaryButtonPadding?: CSSProperties["padding"];
  primaryButtonBackgroundColor?: CSSProperties["backgroundColor"];
  primaryButtonTop?: CSSProperties["top"];
  primaryButtonLeft?: CSSProperties["left"];
  rectangleDivBackgroundColor?: CSSProperties["backgroundColor"];
  searchFlightsLeft?: CSSProperties["left"];
  searchFlightsDisplay?: CSSProperties["display"];
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  searchFlights,
  primaryButtonPosition,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonTop,
  primaryButtonLeft,
  rectangleDivBackgroundColor,
  searchFlightsLeft,
  searchFlightsDisplay,
}) => {
  const primaryButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: primaryButtonPosition,
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      top: primaryButtonTop,
      left: primaryButtonLeft,
    };
  }, [
    primaryButtonPosition,
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonTop,
    primaryButtonLeft,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const searchFlightsStyle: CSSProperties = useMemo(() => {
    return {
      left: searchFlightsLeft,
      display: searchFlightsDisplay,
    };
  }, [searchFlightsLeft, searchFlightsDisplay]);

  return (
    <div className={styles.primaryButton} style={primaryButtonStyle}>
      <div className={styles.primaryButtonChild} style={rectangleDivStyle} />
      <div className={styles.searchFlights} style={searchFlightsStyle}>
        {searchFlights}
      </div>
    </div>
  );
};

export default PrimaryButton;
