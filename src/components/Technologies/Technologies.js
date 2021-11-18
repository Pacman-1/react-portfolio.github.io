import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="Tech">
   <SectionDivider/>
   <br/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText> I havent been coding for long but I have worked with a range of Technologies to create applications and websites. From Back-end to Front-End.</SectionText>
   <List>
     <ListItem>
       <DiReact size="3rem"/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experianced with <br/>
           React.js
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiFirebase size="3rem"/>
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experianced with <br/>
           Javascript
         </ListParagraph>
       </ListContainer>
     </ListItem>

     <ListItem>
       <DiZend size="3rem"/>
       <ListContainer>
         <ListTitle>UI/UX-End</ListTitle>
         <ListParagraph>
           Experianced with <br/>
           Photoshop
         </ListParagraph>
       </ListContainer>
     </ListItem>
     
   </List>
 </Section>
);

export default Technologies;
