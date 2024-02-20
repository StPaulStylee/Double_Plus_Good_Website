import { HeaderNavItem } from "../Header/Header.styles";
import { DoublePlusGoodBanner } from "./Banner";
import {
  FooterContainer,
  FooterItem,
  FooterSocialsContainer,
} from "./Footer.styles";
import xLogo from "../assets/x-logo.svg";
import instangramLogo from "../assets/instagram-logo.svg";
import { Email } from "../shared.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <Email href="mailto:inquiry@doubleplusgood.com">
          inquiry@doubleplusgood.com
        </Email>
      </FooterItem>
      <FooterItem>
        <DoublePlusGoodBanner />
      </FooterItem>
      <FooterItem>
        <FooterSocialsContainer>
          <HeaderNavItem>
            <a
              href="https://twitter.com/Dbl_Plus_Good"
              target="_blank"
              aria-label="X Profile Link"
              rel="noreferrer"
            >
              <img src={xLogo} alt="Link to X account" />
            </a>
          </HeaderNavItem>
          <HeaderNavItem>
            <a
              href="https://www.instagram.com/dbl_plus_good/"
              target="_blank"
              aria-label="Instagram Profile Link"
              rel="noreferrer"
            >
              <img src={instangramLogo} alt="Link to Instagram account" />
            </a>
          </HeaderNavItem>
        </FooterSocialsContainer>
      </FooterItem>
    </FooterContainer>
  );
};
