import { FunctionComponent } from "react";
import ResultsCardContainer from "./ResultsCardContainer";
import ResultsContainer from "./ResultsContainer";
import styles from "./HotelResultsContainer.module.css";
const HotelResultsContainer: FunctionComponent = () => {
  return (
    <section className={styles.hotelResults}>
      <div className={styles.resultsSumamry}>
        <div className={styles.results}>200+ results</div>
        <div className={styles.filters}>
          <div className={styles.filters1}>Filters</div>
          <img className={styles.filtersIcon} alt="" src="/filters1.svg" />
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultCardsCol}>
          <ResultsCardContainer
            roomSize="/unsplashs6ch7n3eoqy@2x.png"
            roomType="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            roomPrice="/vector4.svg"
            roomDimensions="/video2.svg"
          />
          <ResultsContainer
            hotelName="/unsplashs6ch7n3eoqy1@2x.png"
            hotelDescription="Freehand Los Angeles"
            roomType="Bed in Quad"
            hotelReviews="(1,941 reviews)"
            hotelRating="4.2"
            hotelPrice="/vector5.svg"
            hotelPricePerNight="$S 198"
          />
          <ResultsContainer
            hotelName="/unsplashs6ch7n3eoqy2@2x.png"
            hotelDescription="The Westin Bonavent..."
            roomType="1 King, City view"
            hotelReviews="(1,002 reviews)"
            hotelRating="4.1"
            hotelPrice="/vector6.svg"
            hotelPricePerNight="$S 289"
          />
          <ResultsCardContainer
            roomSize="/unsplashs6ch7n3eoqy3@2x.png"
            roomType="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            roomPrice="/vector7.svg"
            roomDimensions="/video3.svg"
            propCursor="pointer"
          />
          <iframe
            className={styles.map}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className={styles.map1}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </section>
  );
};

export default HotelResultsContainer;
