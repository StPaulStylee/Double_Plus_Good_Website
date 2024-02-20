import { StyledImage } from "../shared.styles";
import { FooterBannerContainer } from "./Footer.styles";
import banner from "../assets/doubleplusgoodBanner.png";

export const DoublePlusGoodBanner = () => {
  return (
    <FooterBannerContainer>
      <a href="/">
        <StyledImage src={banner} alt="Double Plus Good Logo" />
      </a>
    </FooterBannerContainer>
  );
};
