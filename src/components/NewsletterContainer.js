import WeeklyUpdatesContainer from "./WeeklyUpdatesContainer";
import styles from "./NewsletterContainer.module.css";
const NewsletterContainer = () => {
  return (
    <div className={styles.footerSection}>
      <WeeklyUpdatesContainer
        imageDimensions="/newsletter-section-background1@2x.png"
        imageId="174x33x832843815"
        imageDimensionId="130x30x3378863353"
      />
    </div>
  );
};

export default NewsletterContainer;
