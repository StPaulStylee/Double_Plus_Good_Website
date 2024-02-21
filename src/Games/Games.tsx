import { StyledImage } from "../shared.styles";
import {
  GameDescription,
  GameImageContainer,
  GamesPageContentContainer,
} from "./Games.styles";
import title from "../assets/CarnivalShooter_Title.png";
import pageContent from "../assets/pageContent.json";

export const Games = () => {
  const { carnivalShooter } = pageContent.games;
  return (
    <GamesPageContentContainer>
      <GameImageContainer>
        <a
          href="https://dbl-plus-good.itch.io/carnival-shooter"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImage src={title} alt="Carnival Shooter title image" />
        </a>
        <GameDescription>{carnivalShooter.description}</GameDescription>
      </GameImageContainer>
    </GamesPageContentContainer>
  );
};
