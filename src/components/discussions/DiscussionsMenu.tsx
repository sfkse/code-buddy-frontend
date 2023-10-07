import styled from "styled-components";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineQuestionCircle,
  AiTwotoneLike,
  AiTwotoneTags,
} from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { MdForum, MdOutlineQuestionAnswer } from "react-icons/md";

import SearchInput from "../SearchInput";

const DiscussionsMenu = () => {
  return (
    <DiscussionsMenuWrapper>
      <DiscussionsMenuSearchInputWrapper>
        <SearchInput placeholder="Search discussions..." />
      </DiscussionsMenuSearchInputWrapper>
      <DiscussionsMenuList>
        <NavLinkItem
          to={"/discussions/questions"}
          key={"Questions"}
          style={({ isActive }): CSSProperties => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          <DiscussionsMenuItemIcon>
            <QuestionsIcon />
          </DiscussionsMenuItemIcon>
          <DiscussionsMenuItemText>Questions</DiscussionsMenuItemText>
        </NavLinkItem>

        <NavLinkItem
          to={"/discussions/ranking"}
          key={"Ranking"}
          style={({ isActive }): CSSProperties => ({
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          <DiscussionsMenuItemIcon>
            <RankingIcon />
          </DiscussionsMenuItemIcon>
          <DiscussionsMenuItemText>Ranking</DiscussionsMenuItemText>
        </NavLinkItem>
        <DiscussionsMenuPersonalHeader>
          Personal Menu
        </DiscussionsMenuPersonalHeader>
        <DiscussionsMenuItem>
          <DiscussionsMenuItemIcon>
            <YourQuestionsIcon />
          </DiscussionsMenuItemIcon>
          <DiscussionsMenuItemText>Your Questions</DiscussionsMenuItemText>
        </DiscussionsMenuItem>
        <DiscussionsMenuItem>
          <DiscussionsMenuItemIcon>
            <YourAnswersIcon />
          </DiscussionsMenuItemIcon>
          <DiscussionsMenuItemText>Your Answers</DiscussionsMenuItemText>
        </DiscussionsMenuItem>
        <DiscussionsMenuItem>
          <DiscussionsMenuItemIcon>
            <YourLikesIcon />
          </DiscussionsMenuItemIcon>
          <DiscussionsMenuItemText>Your likes & votes</DiscussionsMenuItemText>
        </DiscussionsMenuItem>
      </DiscussionsMenuList>
    </DiscussionsMenuWrapper>
  );
};

export default DiscussionsMenu;

const DiscussionsMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DiscussionsMenuSearchInputWrapper = styled.div`
  padding: 0 2rem;
`;

const DiscussionsMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const QuestionsIcon = styled(MdForum)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.2rem;
`;

const TagsIcon = styled(AiTwotoneTags)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.4rem;
`;

const RankingIcon = styled(FaRankingStar)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.4rem;
`;

const YourQuestionsIcon = styled(AiOutlineQuestionCircle)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.2rem;
`;

const YourAnswersIcon = styled(MdOutlineQuestionAnswer)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.2rem;
  transform: rotate(180deg);
`;

const YourLikesIcon = styled(AiTwotoneLike)`
  color: ${({ theme }) => theme.colors.primaryExtraLight};
  font-size: 1.2rem;
`;

const NavLinkItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    ${QuestionsIcon}, ${TagsIcon}, ${RankingIcon}, ${YourQuestionsIcon}, ${YourAnswersIcon}, ${YourLikesIcon} {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};

    ${QuestionsIcon}, ${TagsIcon}, ${RankingIcon}, ${YourQuestionsIcon}, ${YourAnswersIcon}, ${YourLikesIcon} {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const DiscussionsMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};

    ${QuestionsIcon}, ${TagsIcon}, ${RankingIcon}, ${YourQuestionsIcon}, ${YourAnswersIcon}, ${YourLikesIcon} {
      color: ${({ theme }) => theme.colors.yellow};
    }
  }
`;

const DiscussionsMenuItemIcon = styled.div`
  padding-top: 0.3rem;
`;

const DiscussionsMenuItemText = styled.span`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 1rem;
`;

const DiscussionsMenuPersonalHeader = styled.h3`
  color: ${({ theme }) => theme.colors.primaryLight};
  padding-left: 2rem;
  font-weight: 500;
  font-size: 1.1rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

