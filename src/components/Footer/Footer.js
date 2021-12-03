import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:704-305-8884">704-305-8884</LinkItem>
      </LinkColumn>

      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:cookroland56@gmail.com">cookroland56@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
    <CompanyContainer> <Slogan>Growing one project at a time</Slogan></CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Pacman-1">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>

  );
};

export default Footer;
