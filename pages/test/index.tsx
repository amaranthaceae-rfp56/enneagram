import React, { useEffect, useState } from 'react'
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

const Start = () => {

  const router = useRouter()

  const [username, setUsername] = useState<string>('')
  const [testInProgress, setTestInProgress] = useState<boolean>(false)

  console.log('THis is the router:', router.query.uid)

  let userData = async () => {

    let currentUser = await axios.get(`http://localhost:3002/user/${ router.query.uid }`)
    console.log('the current user in the test page is: ', currentUser)
    setUsername(currentUser.data.first_name)
    setTestInProgress(currentUser.data.testing)
    console.log(testInProgress)
  };

  useEffect(() => {
    userData()
  });

  let testGetRequest = async () => {
    console.log('button pressed')
    let result = await axios.get('http://localhost:3002/question/4')
    console.log(result);
  }

  return (
    <>
      <header className="enneagram-main">
        {/* <div className="title">E9 ENNEAGRAM TEST</div> */}
        <div className="title">E9 ENNEAGRAM TEST for { username }</div>
          <Image className="enneagram-logo" src={ logo } alt="logo"/>
            </header>
              <div className="login-buttons-container">
              <Link href="/test/[question]" as={ `/test/10` } passHref>
                  <Button
                    onClick={testGetRequest}
                    disabled={!testInProgress}
                    variant="contained">Resume Test
                  </Button>
                </Link>
                <Link href="/test/[question]" as={ `/test/4` } passHref>
                  <Button
                    onClick={testGetRequest}
                    disabled={testInProgress}
                    variant="contained">Begin New Test
                  </Button>
                </Link>
          </div>
       </>
   );
};

export default Start;
