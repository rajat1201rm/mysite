import React from 'react';

import { Image } from 'next-images'
import dp from '../../../public/images/4.jpg'

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
const ProfilePic = () => {
    return (
     
   <div>
     HI
     <Image src={dp} loader={myLoader}/>
   </div>
            
    )
}

export default ProfilePic
