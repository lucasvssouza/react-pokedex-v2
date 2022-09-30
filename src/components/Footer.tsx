import { FooterContainer, ContactContainer, ContactItem } from "../styles";
import github from "../image/github-icon.png";
import whatsapp from "../image/whatsapp-icon.png";
import linked from "../image/linkedin-icon.png";
import email from "../image/email-icon.png";
const Footer = () => {
  const contactLinkedin = () => {
    window
      .open("https://www.linkedin.com/in/lucas-vssouza/", "_blank")!
      .focus();
  };

  const contactGithub = () => {
    window.open("https://github.com/lucasvssouza/", "_blank")!.focus();
  };

  const contactWhatsapp = () => {
    window.open("https://wa.me/+5511966929698", "_blank")!.focus();
  };

  const contactEmail = () => {
    window.open("mailto:lucas_vss@hotmail.com", "_blank")!.focus();
  };

  return (
    <FooterContainer>
      <div>© Lucas Souza 2022</div>
      <ContactContainer>
        <ContactItem
          src={linked}
          onClick={contactLinkedin}
        />
        <ContactItem
          src={github}
          onClick={contactGithub}
        />
        <ContactItem
          src={whatsapp}
          onClick={contactWhatsapp}
        />
        <ContactItem src={email} onClick={contactEmail}/>
      </ContactContainer>
    </FooterContainer>
  );
};

export default Footer;
