import React from 'react';
import Image from 'next/image'
import Typed from 'typed.js';


import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  
  
  <Section row nopadding>
  <LeftSection>
 <SectionTitle>
  HI ! <br/ >
  
       RAJAT SRIVASTAVA
        </SectionTitle>
        <SectionText>
        Student || Freelancer || Developer
        </SectionText>
        <Button onClick={()=>window.location="mailto:rajat.srivastava2019@vitstudent.ac.in"}>Contact Me</Button>
         </LeftSection>
    </Section>
);

export default Hero;
