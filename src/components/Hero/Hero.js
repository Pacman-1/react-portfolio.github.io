import React from 'react';

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
      <Button onclick={()=> window.location="https://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;