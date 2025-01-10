import { Link, NavLink } from "react-router-dom";
import { RiCopyrightLine } from "react-icons/ri";
import groomer_logo from "./images/groomer_logo.png";
import "./css/Footer.css";
function Footer() {
  return (
    <div className="footer container">
      <div className="footer-main">
        <div className="footer-main-one">
          <NavLink to="/">
            <img className="logo-image" src={groomer_logo} alt="Groomer logo" />
          </NavLink>
          <div className="social-media-links-footer">
            <Link>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 2.5C4.73858 2.5 2.5 4.73858 2.5 7.5V17.5C2.5 20.2614 4.73858 22.5 7.5 22.5H17.5C20.2614 22.5 22.5 20.2614 22.5 17.5V7.5C22.5 4.73858 20.2614 2.5 17.5 2.5H7.5ZM18.5 7.5C19.0523 7.5 19.5 7.05228 19.5 6.5C19.5 5.94772 19.0523 5.5 18.5 5.5C17.9477 5.5 17.5 5.94772 17.5 6.5C17.5 7.05228 17.9477 7.5 18.5 7.5ZM17.5 12.5C17.5 15.2614 15.2614 17.5 12.5 17.5C9.73858 17.5 7.5 15.2614 7.5 12.5C7.5 9.73858 9.73858 7.5 12.5 7.5C15.2614 7.5 17.5 9.73858 17.5 12.5ZM12.5 15.5C14.1569 15.5 15.5 14.1569 15.5 12.5C15.5 10.8431 14.1569 9.5 12.5 9.5C10.8431 9.5 9.5 10.8431 9.5 12.5C9.5 14.1569 10.8431 15.5 12.5 15.5Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link>
              <svg
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.553638 0.204102L9.04759 11.5613L0.5 20.7952H2.42372L9.90712 12.7108L15.9535 20.7952H22.5L13.5281 8.79918L21.4842 0.204102H19.5605L12.6686 7.64969L7.10013 0.204102H0.553638ZM3.38261 1.62112H6.39009L19.6706 19.378H16.6631L3.38261 1.62112Z"
                  fill="white"
                />
              </svg>
            </Link>
            <Link>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 4.5C6.5 5.60457 5.60457 6.5 4.5 6.5C3.39543 6.5 2.5 5.60457 2.5 4.5C2.5 3.39543 3.39543 2.5 4.5 2.5C5.60457 2.5 6.5 3.39543 6.5 4.5ZM6.5 9V22.5H2.5V9H6.5ZM9.5 9H13.5V9.84141C14.1256 9.62031 14.7987 9.5 15.5 9.5C18.8137 9.5 21.5 12.1863 21.5 15.5V22.5H17.5V15.5C17.5 14.3954 16.6046 13.5 15.5 13.5C14.3954 13.5 13.5 14.3954 13.5 15.5V22.5H9.5V15.5V9Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="footer-main-two">
          <p className="contact-info-footer">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6L8.7812 8.5208C10.1248 9.41653 11.8752 9.41653 13.2188 8.5208L17 6M5 19H17C19.2091 19 21 17.2091 21 15V5C21 2.79086 19.2091 1 17 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Groomer.online@gmail.com
          </p>
          <p className="contact-info-footer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 19V17.3541C21 16.5363 20.5021 15.8008 19.7428 15.4971L17.7086 14.6835C16.7429 14.2971 15.6422 14.7156 15.177 15.646L15 16C15 16 12.5 15.5 10.5 13.5C8.5 11.5 8 9 8 9L8.35402 8.82299C9.28438 8.35781 9.70285 7.25714 9.31654 6.29136L8.50289 4.25722C8.19916 3.4979 7.46374 3 6.64593 3H5C3.89543 3 3 3.89543 3 5C3 13.8366 10.1634 21 19 21C20.1046 21 21 20.1046 21 19Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            +91 9876543210
          </p>
          <p className="contact-info-footer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="11" r="3" stroke="white" stroke-width="1.5" />
              <path
                d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            Hi-tech city, Hyderabad
          </p>
        </div>
        <div className="footer-main-three">
          <NavLink to="/terms-conditions" className="links-footer">
            Terms and Conditions
          </NavLink>
          <NavLink to="/privacy-policy" className="links-footer">
            Privacy and Policy
          </NavLink>
        </div>
      </div>
      <hr
        style={{
          backgroundColor: "burlywood",
          width: "90%",
          border: "none",
          height: "1px",
        }}
      />
      <div className="footer-copyright">
        <img src={groomer_logo} alt="groomer" className="footer-logo" />
        <p className="copyright-para">
          Copyright{" "}
          <span style={{ paddingInline: "10px" }}>
            <RiCopyrightLine />
          </span>{" "}
          2024 GROOMER VOGUE AND BEAUTY PRIVATE LIMITED, All rights reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
