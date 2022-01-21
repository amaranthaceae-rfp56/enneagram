import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import logo from '../../assets/eneagrama.png'

import { imageConfigDefault } from 'next/dist/server/image-config';

type StartProps = {
};

const Start = () => {

  return (
    <>
      <header className="enneagram-main">
        <div className="title">E9 ENNEAGRAM TEST</div>
          <Image className="enneagram-logo" src={ logo } alt="logo"/>
            </header>
              <div className="login-buttons-container">
                <Link href="/test/[question]" as={ `/test/4` } passHref>
                  <Button
                    variant="contained">Start Test
                  </Button>
                </Link>
          </div>
       </>
   );
};

export default Start;