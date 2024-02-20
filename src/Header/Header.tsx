import { HeaderNavigationContainer } from "./Header.styles";

import { DoublePlusGoodLogo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const Header = () => {
  return (
    <header>
      <HeaderNavigationContainer>
        <DoublePlusGoodLogo />
        <NavLinks />
      </HeaderNavigationContainer>
    </header>
  );
};
