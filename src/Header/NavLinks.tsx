import { Link, useLocation } from "react-router-dom";
import { HeaderNavItem, NavLinksContainer } from "./Header.styles";
import xLogo from "../assets/x-logo.svg";
import instangramLogo from "../assets/instagram-logo.svg";
import { useEffect, useState } from "react";
import pageContent from "../assets/pageContent.json";

export const NavLinks = () => {
  const [isAboutActive, setIsAboutActive] = useState<boolean>(true);
  const [isGamesActive, setIsGamesActive] = useState<boolean>(false);
  const { pathname } = useLocation();
  const { aboutLink, gamesLink } = pageContent.nav;
  useEffect(() => {
    if (pathname.includes("/games")) {
      setIsAboutActive(false);
      setIsGamesActive(true);
      return;
    }
    setIsAboutActive(true);
    setIsGamesActive(false);
  }, [pathname]);

  return (
    <NavLinksContainer>
      <HeaderNavItem $active={isAboutActive}>
        <Link to="/">{aboutLink}</Link>
      </HeaderNavItem>
      <HeaderNavItem $active={isGamesActive}>
        <Link to="/games">{gamesLink}</Link>
      </HeaderNavItem>
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
    </NavLinksContainer>
  );
};
