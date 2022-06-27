import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import Liella from "./Liella";
import Media from "./Media";
import { Section, SecretContainer, SecretHero, SecretIntro, SecretIntroTitle, Smith, RightSection, SecretButton } from "./SecretStyles";

const Secret = () => (
    <SecretContainer>
        <SecretHero>
            <SectionTitle main>Shh...You have found the secret page..!</SectionTitle>
            {/* <Button>Tell me the secret</Button> */}
        </SecretHero>
        <SectionDivider />
        <SecretIntro id="intro" style={{paddingBottom: '32px'}}>
            <SecretIntroTitle>👇Here is something to cheer you up</SecretIntroTitle>
            <Media />
            <SecretIntroTitle>and before you left, I want to tell</SecretIntroTitle>
            <Section row>
                <div style={{display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                    <Smith src="./images/smith.png" />
                </div>
                <RightSection>
                    <Liella />
                </RightSection>
            </Section>
            
        </SecretIntro>
        <a href="/" style={{display: 'flex', marginTop: '32px', marginBottom: '24px', width: 'max-content'}}>
            <SecretButton style={{color: 'grey', fontSize: '22px'}}><AiOutlineArrowLeft size="1.5rem" /> Okay, go back</SecretButton>
        </a>
        
    </SecretContainer>
);

export default Secret;