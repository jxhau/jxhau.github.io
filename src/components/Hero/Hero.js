import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { GiCoffeeCup } from 'react-icons/gi';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there <GiCoffeeCup size="3rem" /><br />
        I'm JX Hau
      </SectionTitle>
      <SectionText>
        Final year IT student at Multimedia University, Malaysia. I have great passion for technologies.
      </SectionText>
      <Button onClick={() => window.location="#about"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
