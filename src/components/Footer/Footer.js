import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
<LinkColumn>

<LinkTitle>Call</LinkTitle>
<LinkItem href="tel:7058884596">+91 705 888 4596</LinkItem>
</LinkColumn>



<LinkColumn>
<LinkTitle>Email</LinkTitle>
<LinkItem href="mailto:rajat.srivastava2019@vitstudent.ac.in">rajat.srivastava2019@vitstudent.ac.in</LinkItem>
</LinkColumn>

     </LinkList>
     <SocialIconsContainer>
       <CompanyContainer>
         <Slogan>
         <nobr />  Xploring the world<nobr />
           </Slogan>
       </CompanyContainer>
       <SocialIcons href="https://github.com/rajat1201rm">
<AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/rajat-srivastava-7694391b1/">
<AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/rajat1201.rm/">
<AiFillInstagram size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.youtube.com/channel/UCHRoy4GDrxYYkJrzZ2H_XMA">
<AiFillYoutube size="3rem" />
    </SocialIcons>
     </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
