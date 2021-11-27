import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I describe myself as someone who's persistent, a quick learner and loves solving problems with simple and scalable solutions.
      </SectionText>
      <Link href="https://github.com/Pacman-1" ><Button >Learn More</Button></Link>
    </LeftSection>
  </Section>
);

export default Hero;