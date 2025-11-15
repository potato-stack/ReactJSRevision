import type { JSX } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import "./mainpage.content.css";

type TourInfoProps = {
  imgSrc: string;
  location: string;
  name: string;
  time: string;
  text: string;
};

const TourInfo = ({
  imgSrc,
  location,
  name,
  time,
  text,
}: TourInfoProps): JSX.Element => {
  return (
    <>
      <div>
        <div className="tour-infomation">
          <img src={imgSrc} alt={name} />
          <div className="tour-infomation-detail">
            <div className="tour-location">
              <div className="tour-location-title">
                <FontAwesomeIcon icon={faLocationDot} className="tour-icon" />
                <span className="tour-location-name">{location}</span>
                <a className="tour-location-link" rel="location-link" href="">
                  View on google Maps
                </a>
              </div>
              <h1 className="tour-name">{name}</h1>
            </div>
            <span className="tour-time">{time}</span>
            <span className="tour-description">{text}</span>
          </div>
        </div>
        <hr className="seperator"></hr>
      </div>
    </>
  );
};

export const Content = (): JSX.Element => {
  return (
    <>
      <main>
        <TourInfo
          imgSrc="https://scrimba.com/links/travel-journal-japan-image-url"
          location="JAPAN"
          name="MountFuji"
          time="12 Jan, 2023 - 24 Jan, 2023"
          text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
        ></TourInfo>
        <TourInfo
          imgSrc="https://scrimba.com/links/travel-journal-australia-image-url"
          location="AUSTRALIA"
          name="Sydney Opera House"
          time="27 May, 2023 - 8 Jun, 2023"
          text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
        ></TourInfo>
        <TourInfo
          imgSrc="https://scrimba.com/links/travel-journal-norway-image-url"
          location="NORWAY"
          name="Geirangerfjord"
          time="01 Oct, 2024 - 18 Nov, 2024"
          text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
        ></TourInfo>
      </main>
    </>
  );
};
