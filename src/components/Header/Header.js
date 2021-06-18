import Link from 'next/link';
import React from 'react';


import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons ,Span} from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{display:"flex",alignItems:'center',color:"white",marginBottom:20}}>

<DiCssdeck size="3rem" />
<Span>
  The_Dev_Looper( );
</Span>
        </a>
      </Link>
    </Div1 >
<Div2>
  <li>
    <Link href="#projects">
     <NavLink>projects()</NavLink>
     </Link>
      </li>
      <li>
    <Link href="#tech">
     <NavLink>technologies() </NavLink> 
     </Link>
      </li>
      <li>
    <Link href="#about">
     <NavLink>about()</NavLink> 
     </Link>
</li>
 
</Div2>
<Div3>
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


</Div3>
</Container>
);

export default Header;
