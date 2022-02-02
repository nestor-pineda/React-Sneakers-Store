import { FooterBlock } from "./styles";

const ColumnLinks = ({ menuItems, title }) => {
  return (
    <FooterBlock className="footer-block">
      <h3>{title}</h3>
      {menuItems.map((item) => (
        <a key={item.text} href={item.url} className="footer-link">
          {item.icon} {item.text}
        </a>
      ))}
    </FooterBlock>
  );
};

export default ColumnLinks;
