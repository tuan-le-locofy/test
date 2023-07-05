import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelContainer1 from "./HotelContainer1";
import styles from "./PopularStaysContainer.module.css";
const PopularStaysContainer = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelContainer1
          hotelDescription="270x200x-1314662103"
          accommodationDescription="Entire bungalow"
          hotelName="Matterhorn Suites"
          hotelPrice="$575/night"
          hotelRoomDimensions="16.64x17.19x2721704407"
          hotelRating="4.9"
          hotelReviews="(60 reviews)"
        />
        <HotelContainer1
          hotelDescription="270x200x-2047824460"
          accommodationDescription="2-Story beachfront suite"
          hotelName="Discovery Shores"
          hotelPrice="$360/night"
          hotelRoomDimensions="16.64x17.19x2615133369"
          hotelRating="4.8"
          hotelReviews="(116 reviews)"
          propFlex="1"
          propGap="11px"
        />
        <HotelContainer1
          hotelDescription="270x200x-1598406944"
          accommodationDescription="Single deluxe hut"
          hotelName="Arctic Hut "
          hotelPrice="$420/night"
          hotelRoomDimensions="16.68x17.19x1812072646"
          hotelRating="4.7"
          hotelReviews="(78 reviews)"
          propFlex="1"
          propGap="5px"
        />
        <HotelContainer1
          hotelDescription="270x200x1540594771"
          accommodationDescription="Deluxe King Room"
          hotelName="Lake Louise Inn"
          hotelPrice="$244/night"
          hotelRoomDimensions="16.64x17.19x2120909027"
          hotelRating="4.6"
          hotelReviews="(63 reviews)"
          propFlex="unset"
          propGap="11px"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
