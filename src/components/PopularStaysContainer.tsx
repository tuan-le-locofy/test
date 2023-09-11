import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./HotelCardContainer";
import styles from "./PopularStaysContainer.module.css";
const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <b className={styles.popularStays1}>Popular Stays</b>
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
        <HotelCardContainer
          roomDescription="/unsplashrlwe8f8anoc@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          reviewCount="(60 reviews)"
          rating="4.9"
          roomImageUrl="/vector.svg"
        />
        <HotelCardContainer
          roomDescription="/unsplashtsn8bpopveo@2x.png"
          roomType="2-Story beachfront suite"
          hotelName="Discovery Shores"
          roomPrice="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          roomImageUrl="/vector1.svg"
          propFlex="1"
          propGap="11px"
          propWidth="16.64px"
          propRight="unset"
        />
        <HotelCardContainer
          roomDescription="/unsplashrlwe8f8anoc1@2x.png"
          roomType="Single deluxe hut"
          hotelName="Arctic Hut "
          roomPrice="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          roomImageUrl="/vector2.svg"
          propFlex="1"
          propGap="5px"
          propWidth="16.68px"
          propRight="unset"
        />
        <HotelCardContainer
          roomDescription="/unsplashyqrybvxug5q@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          reviewCount="(63 reviews)"
          rating="4.6"
          roomImageUrl="/vector3.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="16.64px"
          propRight="unset"
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
