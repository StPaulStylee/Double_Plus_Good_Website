import {
  PageSection,
  PageSectionContent,
  PageSectionContentContainer,
  PageSectionHeader,
  PageSectionHeaderContainer,
  StyledImage,
} from "../shared.styles";
import { AboutLogoContainer } from "./About.styles";
import pageContent from "../assets/pageContent.json";
import logo from "../assets/logo400x400_NoText.png";
import { Subscribe } from "../Subscribe/Subscribe";
export const About = () => {
  const { header, content, subscribeHeader, subscribeContent } =
    pageContent.about;
  return (
    <>
      <PageSection>
        <PageSectionHeaderContainer>
          <PageSectionHeader $size="45" $center>
            {header}
          </PageSectionHeader>
        </PageSectionHeaderContainer>
        <PageSectionContentContainer>
          <PageSectionContent $center>{content}</PageSectionContent>
        </PageSectionContentContainer>
      </PageSection>
      <PageSection>
        <PageSectionHeaderContainer>
          <PageSectionHeader $center>{subscribeHeader}</PageSectionHeader>
          <PageSectionContent $center>{subscribeContent}</PageSectionContent>
          <Subscribe />
        </PageSectionHeaderContainer>
        <PageSectionContentContainer $center>
          <AboutLogoContainer>
            <StyledImage src={logo} alt="Double Plus Good Logo" />
          </AboutLogoContainer>
        </PageSectionContentContainer>
      </PageSection>
    </>
  );
};
