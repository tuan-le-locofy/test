import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./IconFalseHoverFalseDisab.module.css";

type IconFalseHoverFalseDisabType = {
  option?: string;

  /** Style props */
  iconFalseHoverFalseDisabPosition?: CSSProperties["position"];
  iconFalseHoverFalseDisabWidth?: CSSProperties["width"];
  iconFalseHoverFalseDisabAlignSelf?: CSSProperties["alignSelf"];
  iconFalseHoverFalseDisabHeight?: CSSProperties["height"];
};

const IconFalseHoverFalseDisab: FunctionComponent<
  IconFalseHoverFalseDisabType
> = ({
  option,
  iconFalseHoverFalseDisabPosition,
  iconFalseHoverFalseDisabWidth,
  iconFalseHoverFalseDisabAlignSelf,
  iconFalseHoverFalseDisabHeight,
}) => {
  const iconFalseHoverFalseDisabStyle: CSSProperties = useMemo(() => {
    return {
      position: iconFalseHoverFalseDisabPosition,
      width: iconFalseHoverFalseDisabWidth,
      alignSelf: iconFalseHoverFalseDisabAlignSelf,
      height: iconFalseHoverFalseDisabHeight,
    };
  }, [
    iconFalseHoverFalseDisabPosition,
    iconFalseHoverFalseDisabWidth,
    iconFalseHoverFalseDisabAlignSelf,
    iconFalseHoverFalseDisabHeight,
  ]);

  return (
    <div
      className={styles.iconfalseHoverfalseDisab}
      style={iconFalseHoverFalseDisabStyle}
    >
      <div className={styles.option}>{option}</div>
    </div>
  );
};

export default IconFalseHoverFalseDisab;
