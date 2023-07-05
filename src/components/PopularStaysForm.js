import PopularStaysCard from "./PopularStaysCard";
import HotelCardContainer from "./HotelCardContainer";
import styles from "./PopularStaysForm.module.css";
const PopularStaysForm = () => {
  return (
    <form className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <b className={styles.popularStays1}>Popular Stays</b>
        <a className={styles.viewAllStaysParent} href="#">
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright10.svg"
          />
        </a>
      </div>
      <div className={styles.hotelCards}>
        <PopularStaysCard
          roomId="/unsplashrlwe8f8anoc2@2x.png"
          roomType="Entire bungalow"
          hotelName="Matterhorn Suites"
          roomPrice="$575/night"
          roomDimensions="/video3.svg"
          roomReviews="(60 reviews)"
          roomRating="4.9"
          roomImageUrl="/vector12.svg"
        />
        <HotelCardContainer
          roomDescription="/unsplashtsn8bpopveo1@2x.png"
          roomType="2-Story beachfront suite"
          roomPrice="Discovery Shores"
          roomReviews="$360/night"
          hotelRating="(116 reviews)"
          hotelName="4.8"
          roomDimensions="/vector13.svg"
        />
        <HotelCardContainer
          roomDescription="/unsplashrlwe8f8anoc3@2x.png"
          roomType="Single deluxe hut"
          roomPrice="Arctic Hut "
          roomReviews="$420/night"
          hotelRating="(78 reviews)"
          hotelName="4.7"
          roomDimensions="/vector14.svg"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <PopularStaysCard
          roomId="/unsplashyqrybvxug5q1@2x.png"
          roomType="Deluxe King Room"
          hotelName="Lake Louise Inn"
          roomPrice="$244/night"
          roomDimensions="/video4.svg"
          roomReviews="(63 reviews)"
          roomRating="4.6"
          roomImageUrl="/vector15.svg"
        />
      </div>
      <div className={styles.viewAllStaysGroup}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright11.svg" />
      </div>
    </form>
  );
};

export default PopularStaysForm;
