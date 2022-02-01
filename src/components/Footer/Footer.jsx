import { StyledFooter } from "./styles";
import ColumnLinks from "./components/ColumnLinks";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const menuItems = [
    {
      text: "Facebook",
      url: "https://facebook.com",
      icon: <FacebookIcon color="blue" />,
      position: "rrss",
    },
    {
      text: "Twitter",
      url: "https://twitter.com",
      icon: <TwitterIcon color="blue" />,
      position: "rrss",
    },
    {
      text: "Youtube",
      url: "https://youtube.com",
      icon: <YouTubeIcon color="blue" />,
      position: "rrss",
    },
    {
      text: "Instagram",
      url: "https://instagram.com",
      icon: <InstagramIcon color="blue" />,
      position: "rrss",
    },
    {
      text: "+34123456789",
      url: "tel:+34123456789",
      icon: <LocalPhoneIcon color="blue" />,
      position: "contact",
    },
    {
      text: "info@nike.com",
      url: "mailto:info@nike.com",
      icon: <EmailIcon color="blue" />,
      position: "contact",
    },
    {
      text: "236 Oxford St, London",
      url: "https://googlemaps.com",
      icon: <LocationOnIcon color="blue" />,
      position: "contact",
    },
  ];

  return (
    <StyledFooter>
      <ColumnLinks menuItems={menuItems.filter((item) => item.position === "rrss")} title="RRSS" />
      <ColumnLinks menuItems={menuItems.filter((item) => item.position === "contact")} title="Contact" />
    </StyledFooter>
  );
};

export default Footer;
