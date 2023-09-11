import { FunctionComponent } from "react";
import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";
import styles from "./NewsletterContainer.module.css";
const NewsletterContainer: FunctionComponent = () => {
  return (
    <section className={styles.footerSection}>
      <WeeklyUpdatesContainer
        imageId="/logo2.svg"
        imageSize="/social-icons2.svg"
      />
    </section>
  );
};

export default NewsletterContainer;
