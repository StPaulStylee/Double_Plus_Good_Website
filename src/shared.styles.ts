import styled, { css } from "styled-components";

export const PageSection = styled.section`
  display: flex;
  padding: 2.25em 0;
`;

export const PageSectionHeaderContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  flex-direction: column;
`;

export const PageSectionHeader = styled.h2<{
  $size?: string;
  $center?: boolean;
}>`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 1rem;
  ${(props) =>
    props.$size &&
    css`
      font-size: ${props.$size}px;
    `}
  ${(props) =>
    props.$center &&
    css`
      text-align: center;
    `}
`;

export const PageSectionContentContainer = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-basis: 60%;
  ${(props) =>
    props.$center &&
    css`
      justify-content: center;
    `}
`;

export const PageSectionContent = styled.p<{ $center?: boolean }>`
  ${(props) =>
    props.$center &&
    css`
      text-align: center;
    `}
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const Line = styled.div`
  background-color: black;
  height: 1px;
  margin: 2.25em 0;
  width: 60%;
`;

export const Email = styled.a<{ $noUnderline?: boolean }>`
  color: black;
  ${(props) =>
    props.$noUnderline &&
    css`
      text-decoration-line: none;
    `}
`;
