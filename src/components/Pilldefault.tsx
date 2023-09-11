import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pilldefault.module.css";

type PilldefaultType = {
  beds?: string;

  /** Style props */
  pilldefaultPosition?: CSSProperties["position"];
  pilldefaultBackgroundColor?: CSSProperties["backgroundColor"];
  bedsColor?: CSSProperties["color"];
};

const Pilldefault: FunctionComponent<PilldefaultType> = ({
  beds,
  pilldefaultPosition,
  pilldefaultBackgroundColor,
  bedsColor,
}) => {
  const pilldefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: pilldefaultPosition,
      backgroundColor: pilldefaultBackgroundColor,
    };
  }, [pilldefaultPosition, pilldefaultBackgroundColor]);

  const bedsStyle: CSSProperties = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <div className={styles.pilldefault} style={pilldefaultStyle}>
      <div className={styles.beds} style={bedsStyle}>
        {beds}
      </div>
    </div>
  );
};

export default Pilldefault;
