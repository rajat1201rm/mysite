import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 100, text: 'Team Members @ SME VIT '},
  { number: 1, text: 'Scholar Memento', },
  { number: 3, text: 'Scholar Badges', },
  { number: 2, text: 'Gold Medal at States Kickboxing ', }
 
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Acomplishments</SectionTitle>
   <Boxes>
{data.map((card,index)=>(
<Box  key={index}>
  <BoxNum>{card.number}</BoxNum>
  <BoxText>{card.text}</BoxText>
 
</Box>
))}
     </Boxes>
 </Section>
);

export default Acomplishments;
