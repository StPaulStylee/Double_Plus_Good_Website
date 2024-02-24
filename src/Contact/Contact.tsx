import {
  Email,
  Line,
  PageSection,
  PageSectionContent,
  PageSectionContentContainer,
  PageSectionHeader,
  PageSectionHeaderContainer,
} from "../shared.styles";
import pageContent from "../assets/pageContent.json";
import { ContactForm } from "./Form";

export const Contact = () => {
  const { header, content } = pageContent.contact;
  return (
    <PageSection>
      <PageSectionHeaderContainer>
        <PageSectionHeader $size="45">{header}</PageSectionHeader>
        <p>{content}</p>
        <Line />
        <div>
          <PageSectionContent>Saint Paul, MN</PageSectionContent>
          <Email $noUnderline href="mailto:inquiry@doubleplusgood.com">
            inquiry@doubleplusgood.com
          </Email>
        </div>
      </PageSectionHeaderContainer>
      <PageSectionContentContainer>
        <ContactForm />
      </PageSectionContentContainer>
    </PageSection>
  );
};
