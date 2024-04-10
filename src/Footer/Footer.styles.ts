import styled from "styled-components";

export const FooterContainer = styled.footer`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 1.75em;
  @media screen and (max-width: 475px) {
    flex-direction: column;
  }
`;

export const FooterBannerContainer = styled.div`
  margin: 0 auto;
  max-width: 15em;
  height: auto;
`;

export const FooterSocialsContainer = styled.div`
  display: flex;
  gap: 1.25em;
  justify-content: flex-end;
`;

export const FooterItem = styled.div`
  flex-basis: 33%;
  @media screen and (max-width: 900px) {
    flex-basis: 25%;
  }
  @media screen and (max-width: 640px) {
    flex-basis: 20%;
  }
  a {
    @media screen and (max-width: 670px) {
      font-size: 14px;
    }
  }
`;
