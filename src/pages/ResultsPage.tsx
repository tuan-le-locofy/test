import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightCardsContainer from "../components/FlightCardsContainer";
import BookingContainer from "../components/BookingContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import styles from "./ResultsPage.module.css";
const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFickleflightLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.resultsPage}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <img
            className={styles.fickleflightLogoIcon}
            alt=""
            src="/fickleflight-logo.svg"
            onClick={onFickleflightLogoImageClick}
          />
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.explore} onClick={onExploreTextClick}>
                Explore
              </div>
              <button className={styles.search}>Search</button>
              <div className={styles.explore} onClick={onHotelsTextClick}>
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
                className={styles.unsplashd1upkifd04aIcon}
                alt=""
                src="/top_avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <SearchFormContainer />
      <section className={styles.searchResults}>
        <SearchFilterContainer />
        <div className={styles.resultsSection}>
          <FlightCardsContainer />
          <div className={styles.recentlyBooked}>
            <div className={styles.recentlyBookedTitle}>
              <b className={styles.results}>Recently booked</b>
              <img
                className={styles.recentlyBookedTitleChild}
                alt=""
                src="/vector-21.svg"
              />
            </div>
            <div className={styles.bookingCards}>
              <BookingContainer
                airlineDetails="Singapore Airlines"
                flightPrice="$1128"
                originAirportCode="SIN"
                destinationAirportCode="Singapore"
                originCity="LAX"
                destinationCity="Los Angeles"
                classType="Economy"
                numberOfAdults="2 Adults"
                bookingPlatform="Expedia"
                timeSinceBooking="1s ago!"
              />
              <BookingContainer
                airlineDetails="American Airlines"
                flightPrice="$1024"
                originAirportCode="SFO"
                destinationAirportCode="San Francisco"
                originCity="SIN"
                destinationCity="Singapore"
                classType="First Class"
                numberOfAdults="1 Adults"
                bookingPlatform="Kayak"
                timeSinceBooking="2s ago!"
                propTextAlign="right"
              />
              <BookingContainer
                airlineDetails="Japan Airlines"
                flightPrice="$2996"
                originAirportCode="PHX"
                destinationAirportCode="Phoenix"
                originCity="DXB"
                destinationCity="Dubai"
                classType="Economy"
                numberOfAdults="3 Adults"
                bookingPlatform="Skyscanner"
                timeSinceBooking="3s ago!"
                propTextAlign="left"
              />
              <input
                className={styles.showMore}
                type="text"
                placeholder="Show more"
              />
            </div>
          </div>
        </div>
      </section>
      <NewsletterContainer />
    </div>
  );
};

export default ResultsPage;
