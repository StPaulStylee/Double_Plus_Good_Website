import styled, { css } from "styled-components";

export const HeaderNavigationContainer = styled.nav`
  align-content: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  max-width: 13em;
  height: auto;
`;

export const NavLinksContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 50%;
  gap: 1.25em;
  justify-content: flex-end;
`;

export const HeaderNavItem = styled.div<{ $active?: boolean }>`
  a {
    color: black;
    text-decoration: none;
    ${(props) =>
      props.$active &&
      css`
        background-image: linear-gradient(black, black);
        background-repeat: repeat-x;
        background-size: 1px 1px;
        background-position: 0 100%;
      `}
  }
`;
