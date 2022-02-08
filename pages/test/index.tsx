import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import logo from '../../assets/eneagrama.png'
import axios from 'axios'

import { imageConfigDefault } from 'next/dist/server/image-config';
import { filterProps } from 'framer-motion/types/render/dom/utils/filter-props'

type StartProps = {
};

const Start = (props) => {

  const router = useRouter()

  console.log('THis is the router:', props.router);

  let testGetRequest = async () => {
    console.log('button pressed')
    let result = await axios.get('http://localhost:3002/question/4')
    console.log(result);
  }

  return (
    <>
      <header className="enneagram-main">
        <div className="title">E9 ENNEAGRAM TEST</div>
        {/* <div className="title">E9 ENNEAGRAM TEST for ${props.router.query.firstName}</div> */}
          <Image className="enneagram-logo" src={ logo } alt="logo"/>
            </header>
              <div className="login-buttons-container">
                <Link href="/test/[question]" as={ `/test/4` } passHref>
                  <Button
                    onClick={testGetRequest}
                    variant="contained">Start Test
                  </Button>
                </Link>
          </div>
       </>
   );
};

export default Start;
