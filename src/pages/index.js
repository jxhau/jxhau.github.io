import Link from 'next/link';
import Accomplishments from '../components/Acomplishments/Accomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import { SecretButton } from '../components/Secret/SecretStyles';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <head>
        <title>JX Hau | Webfolio</title>
      </head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Accomplishments />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <SecretButton href='/secret'>
          Do not click
        </SecretButton>
      </div>
      
    </Layout>
  );
};

export default Home;
