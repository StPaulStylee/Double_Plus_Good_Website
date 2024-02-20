import logo from "../assets/dblplusgoodLogo.png";
import { StyledImage } from "../shared.styles";
import { LogoContainer } from "./Header.styles";

export const DoublePlusGoodLogo = () => {
  return (
    <LogoContainer>
      <a href="/">
        <StyledImage src={logo} alt="Double Plus Good Logo" />
      </a>
    </LogoContainer>
  );
};
