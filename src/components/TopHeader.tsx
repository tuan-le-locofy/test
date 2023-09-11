import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TopHeader.module.css";
const TopHeader: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <button className={styles.fickleflightLogo}>
          <img
            className={styles.combinedShapeIcon}
            alt=""
            src="/combinedshape.svg"
          />
        </button>
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <button className={styles.explore}>Explore</button>
            <div className={styles.search} onClick={onSearchTextClick}>
              Search
            </div>
            <div className={styles.search} onClick={onHotelsTextClick}>
              Hotels
            </div>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/notification1.svg"
            />
            <img
              className={styles.profilePictureIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
