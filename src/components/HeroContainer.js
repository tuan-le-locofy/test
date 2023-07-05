import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchForm from "./SearchForm";
import styles from "./HeroContainer.module.css";
const HeroContainer = () => {
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.heroSection}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <button className={styles.fickleflightLogo}>
            <img className={styles.symbolsIcon} alt="" src="/webscreen.svg" />
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
      <div className={styles.searchSection}>
        <div className={styles.bannerGradient} />
        <img
          className={styles.bannerBackground}
          alt=""
          src="/banner--background@2x.png"
        />
        <div className={styles.searchContainer}>
          <div className={styles.title}>
            <div
              className={styles.letsExplore}
            >{`Let’s explore & travel the world`}</div>
            <div className={styles.findTheBest}>
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <SearchForm button="Search flights" />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
