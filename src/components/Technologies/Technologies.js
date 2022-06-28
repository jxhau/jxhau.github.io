import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { SiAdobe } from 'react-icons/si';
import { FaLanguage } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const stack = [
  {
    title: 'Front-End',
    tech: 'HTML, CSS, JavaScript, Tailwind, BootStrap, jQuery, React'
  },
  {
    title: 'Back-End',
    tech: 'PHP, Laravel, Django, MySQL'
  },
  {
    title: 'Mobile Development',
    tech: 'Java, Android, Huawei Mobile Services (HMS)'
  },
  {
    title: 'Content Creation',
    tech: 'Adobe Photoshop (PS), Adobe Premiere Pro (PR), JianYing, Canva'
  },
  {
    title: 'Language',
    tech: 'English, Chinese, Bahasa Melayu, Japanese'
  }

]

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>I've worked with a range of Technologies in the web and mobile development world. I have multimedia creation and several languages skills as well.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>{stack[0].title}</ListTitle>
          <ListParagraph>{stack[0].tech}</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>{stack[1].title}</ListTitle>
          <ListParagraph>{stack[1].tech}</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem" />
        <ListContainer>
          <ListTitle>{stack[2].title}</ListTitle>
          <ListParagraph>{stack[2].tech}</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobe size="3rem" />
        <ListContainer>
          <ListTitle>{stack[3].title}</ListTitle>
          <ListParagraph>{stack[3].tech}</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaLanguage size="3rem" />
        <ListContainer>
          <ListTitle>{stack[4].title}</ListTitle>
          <ListParagraph>{stack[4].tech}</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
