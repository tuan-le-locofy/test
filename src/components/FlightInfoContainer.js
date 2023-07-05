import FlightContainer from "./FlightContainer";
import styles from "./FlightInfoContainer.module.css";
const FlightInfoContainer = () => {
  return (
    <div className={styles.flightCards}>
      <div className={styles.results}>10 out of 177 Results</div>
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 723"
      />
      <FlightContainer
        flightDetails="/sia.svg"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        arrivalTime="7:55 PM"
        flightPrice="S$ 900"
      />
      <FlightContainer
        flightDetails="/japan.svg"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/ana.svg"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="scale(0.8)"
      />
      <FlightContainer
        flightDetails="/americanairlines.svg"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        arrivalTime="9:50 PM"
        flightPrice="S$ 936"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/turkish.svg"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        arrivalTime="4:45 PM"
        flightPrice="S$ 673"
        propTransform="unset"
      />
      <FlightContainer
        flightDetails="/japan1.svg"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        arrivalTime="9:10 AM"
        flightPrice="S$ 859"
        propTransform="scale(0.8)"
      />
      <div className={styles.primaryButton}>
        <div className={styles.primaryButtonChild} />
        <div className={styles.searchFlights}>Show more results</div>
      </div>
    </div>
  );
};

export default FlightInfoContainer;
