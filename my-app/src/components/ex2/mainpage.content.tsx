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
  googleLink: string;
};

const TourInfo = ({
  imgSrc,
  location,
  name,
  time,
  text,
  googleLink,
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
                <a
                  className="tour-location-link"
                  rel="location-link"
                  href={googleLink}
                >
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

const arrayRender = [
  {
    imgSrc: "https://scrimba.com/links/travel-journal-japan-image-url",
    location: "JAPAN",
    name: "MountFuji",
    time: "12 Jan, 2023 - 24 Jan, 2023",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    googleLink:
      "https://www.google.com/maps/place/Phú+Sĩ/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    imgSrc: "https://scrimba.com/links/travel-journal-australia-image-url",
    location: "AUSTRALIA",
    name: "Sydney Opera House",
    time: "27 May, 2023 - 8 Jun, 2023",
    text: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    googleLink:
      "https://www.google.com/maps/place/Nhà+hát+Opera+Sydney/@-33.8567798,151.2104258,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    imgSrc: "https://scrimba.com/links/travel-journal-norway-image-url",
    location: "NORWAY",
    name: "Geirangerfjord",
    time: "01 Oct, 2024 - 18 Nov, 2024",
    text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    googleLink:
      "https://www.google.com/maps/place/Geirangerfjord/@62.1049045,6.9922385,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const Content = (): JSX.Element => {
  return (
    <>
      <main>
        {arrayRender.map((item) => {
          return <TourInfo {...item}></TourInfo>;
        })}
      </main>
    </>
  );
};
