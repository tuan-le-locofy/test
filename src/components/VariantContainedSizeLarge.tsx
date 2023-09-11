import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./VariantContainedSizeLarge.module.css";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargePosition?: CSSProperties["position"];
  variantContainedSizeLargeBoxSizing?: CSSProperties["boxSizing"];
  buttonColor?: CSSProperties["color"];
  buttonDisplay?: CSSProperties["display"];
};

const VariantContainedSizeLarge: FunctionComponent<
  VariantContainedSizeLargeType
> = ({
  button,
  variantContainedSizeLargePosition,
  variantContainedSizeLargeBoxSizing,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle: CSSProperties = useMemo(() => {
    return {
      position: variantContainedSizeLargePosition,
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargePosition, variantContainedSizeLargeBoxSizing]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.variantcontainedSizelarge}
      style={variantContainedSizeLargeStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
