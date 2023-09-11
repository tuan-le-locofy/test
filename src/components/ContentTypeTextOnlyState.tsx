import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContentTypeTextOnlyState.module.css";

type ContentTypeTextOnlyStateType = {
  option1?: string;

  /** Style props */
  contentTypeTextOnlyStatePosition?: CSSProperties["position"];
  contentTypeTextOnlyStateAlignSelf?: CSSProperties["alignSelf"];
};

const ContentTypeTextOnlyState: FunctionComponent<
  ContentTypeTextOnlyStateType
> = ({
  option1,
  contentTypeTextOnlyStatePosition,
  contentTypeTextOnlyStateAlignSelf,
}) => {
  const contentTypeTextOnlyStateStyle: CSSProperties = useMemo(() => {
    return {
      position: contentTypeTextOnlyStatePosition,
      alignSelf: contentTypeTextOnlyStateAlignSelf,
    };
  }, [contentTypeTextOnlyStatePosition, contentTypeTextOnlyStateAlignSelf]);

  return (
    <div
      className={styles.contentTypetextOnlyState}
      style={contentTypeTextOnlyStateStyle}
    >
      <div className={styles.option1}>{option1}</div>
    </div>
  );
};

export default ContentTypeTextOnlyState;
