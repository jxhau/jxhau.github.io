import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { SiAdobe } from 'react-icons/si';
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
    title: 'Other Skills',
    tech: 'C++, Financial Accouting'
  }

]

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of Technologies in the web development world. From Backend to Design</SectionText>
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
    </List>
  </Section>
);

export default Technologies;
