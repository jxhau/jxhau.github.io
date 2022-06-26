import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:jxhau2001@gmail.com'>jxhau2001@gmail.com</LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Connect me for further discussion.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/jxhau'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com/in/jiaxiu-hau'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://twitter.com/jxhau'>
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href='mailto:jxhau2001@gmail.com'>
            <AiFillMail size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
