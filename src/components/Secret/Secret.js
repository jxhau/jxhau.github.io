import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import AESPA from "./aespa";
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
            <SecretIntroTitle>👇Nothing important here but just to show you my bias<span>💙</span></SecretIntroTitle>
            <Media />

            <SecretIntroTitle>Listen more on Spotify or Apple Music</SecretIntroTitle>
            <Section row>
                <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/artist/6YVMFz59CuY7ngCxTxjpxE?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
                <iframe allow="encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style={{width:'100%',maxWidth:'660px',overflow:'hidden',background:'transparent'}} sandbox="allow-modals allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/aespa-essentials/pl.81471eb9f1174950b426105063eee13f"></iframe>
            </Section>
             
            <SecretIntroTitle>and before you leave, I want to tell</SecretIntroTitle>
            <Section row>
                <div style={{display: 'flex', alignItems: 'center', width: 'fit-content'}}>
                    <Smith src="./images/smith.png" />
                </div>
                <RightSection>
                    <AESPA />
                </RightSection>
            </Section>
            
        </SecretIntro>
        <a href="/" style={{display: 'flex', marginTop: '32px', marginBottom: '24px', width: 'max-content'}}>
            <SecretButton style={{color: 'grey', fontSize: '22px'}}><AiOutlineArrowLeft size="1.5rem" /> Okay, go back</SecretButton>
        </a>
        
    </SecretContainer>
);

export default Secret;