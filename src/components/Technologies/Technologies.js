import React from 'react';
import { DiDatabase, DiFirebase,DiFirefox, DiReact, DiUnitySmall,DiRasberryPi ,DiAndroid,DiBlackberry,DiGoogleAnalytics,DiMsqlServer} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <SectionDivider />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I Love to explore various softwares & languages.

  </SectionText>
  <List>
    <ListItem>
      <DiFirefox size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with : <br />
        REACT.js <br />
        NEXT.js
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with : <br />
        ORACLE SQL <br />
        PL-SQL <br />
        SQL-LITE <br />
        GOOGLE FIREBASE <br />
        MONGODB (LEARNING..)
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiUnitySmall size="3rem" />
      <ListContainer>
        <ListTitle>Game-Development</ListTitle>
      <ListParagraph>
        Experience with : <br />
        UNITY-3D GAME ENGINE
      
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiRasberryPi size="3rem" />
      <ListContainer>
        <ListTitle>Robotics</ListTitle>
      <ListParagraph>
        Experience with : <br />
        ROS(LEARNING..)<br />
        ARDUINO
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiBlackberry size="3rem" />
      <ListContainer>
        <ListTitle>Augmented Reality</ListTitle>
      <ListParagraph>
        Experience with : <br />
        VUFORIA AUGMENTED REALITY
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiAndroid size="3rem" />
      <ListContainer>
        <ListTitle>Android</ListTitle>
      <ListParagraph>
        Experience with : <br />
        REACT NATIVE <br />
        ANDROID STUDIO
      </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiGoogleAnalytics size="3rem" />
      <ListContainer>
        <ListTitle>Data-Science</ListTitle>
      <ListParagraph>
        Experience with : <br />
       GOOGLE TENSORFLOW <br />
        R STUDIO<br />
        GEPHI <br/>
        SOCVNET 
        
      </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiMsqlServer size="3rem" />
      <ListContainer>
        <ListTitle>Serverless</ListTitle>
      <ListParagraph>
      Familiar with : <br />
        Amazon Web Services <br />
        Google Cloud Platform <br />
        
      </ListParagraph>
      </ListContainer>
    </ListItem>

  </List>
   </Section>
);

export default Technologies;
