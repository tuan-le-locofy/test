import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import styles from "./WeeklyUpdatesContainer.module.css";

type WeeklyUpdatesContainerType = {
  imageDimensions?: string;
  imageId?: string;
  imageSize?: string;
};

const WeeklyUpdatesContainer: FunctionComponent<WeeklyUpdatesContainerType> = ({
  imageDimensions,
  imageId,
  imageSize,
}) => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.subscribeSection}>
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <b className={styles.formTitleSubtext}>
              subscribe to our newsletter
            </b>
            <b className={styles.formTitle}>Get weekly updates</b>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.fillInYour}>
                Fill in your details to join the party!
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.formText}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.formText}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Email address"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className={styles.button}>
              <VariantContainedSizeLarge
                button="submit"
                variantContainedSizeLargePosition="unset"
                variantContainedSizeLargeBoxSizing="border-box"
                buttonColor="#fff"
                buttonDisplay="inline-block"
              />
            </button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.fickleflightBio}>
          <img className={styles.logoIcon} alt="" src={imageId} />
          <div className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <img className={styles.socialIcons} alt="" src={imageSize} />
        </div>
        <div className={styles.footerChild} />
        <div className={styles.footerLinks}>
          <div className={styles.company}>
            <div className={styles.frame}>
              <div className={styles.company1}>Company</div>
              <div className={styles.aboutUs}>About Us</div>
            </div>
            <div className={styles.frame1}>
              <div className={styles.news}>News</div>
              <div className={styles.careers}>Careers</div>
            </div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
          <div className={styles.company}>
            <div className={styles.frame2}>
              <div className={styles.support1}>Support</div>
              <div className={styles.account}>Account</div>
            </div>
            <div className={styles.frame3}>
              <div className={styles.howWeWork}>Support Center</div>
              <div className={styles.faq}>FAQ</div>
            </div>
            <div className={styles.accessibility}>Accessibility</div>
          </div>
          <div className={styles.more}>
            <div className={styles.frame4}>
              <div className={styles.more1}>More</div>
              <div className={styles.covidAdvisory}>Covid Advisory</div>
            </div>
            <div className={styles.frame5}>
              <div className={styles.airlineFees}>Airline Fees</div>
              <div className={styles.tips}>Tips</div>
            </div>
            <div className={styles.howWeWork}>Quarantine Rules</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeeklyUpdatesContainer;
