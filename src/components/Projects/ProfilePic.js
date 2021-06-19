import React from 'react';

import { Image } from 'next-images'
import dp from '../../../public/images/4.jpg'

const ProfilePic = () => {
    return (
     
   <div>
     HI pic
     <Image src={dp}
alt='error'
/>
   </div>
            
    )
}

export default ProfilePic
