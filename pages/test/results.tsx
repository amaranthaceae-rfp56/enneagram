import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import logo from '../../assets/eneagrama.png'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Results = () => {

  const router = useRouter()

  const { etype, escore } = router.query

  const [enneatype, setEnneatype] = useState<string>('')

  let getEnneatype = async () => {
    console.log('this is the etype', etype);
    let enneatype = await axios.get(`/enneatype/${ etype }`)
    setEnneatype(enneatype.data.name_english)
    console.log('your enneatype is: ', enneatype.data.name_english)
  };

  useEffect(() => {
    getEnneatype()
  })


  return (
    <>
      <header className="enneagram-main">
        {/* <div className="title">E9 ENNEAGRAM TEST</div> */}
        <div className="title">YOUR ENNEAGRAM TYPE IS: { enneatype }</div>
          <Image className="enneagram-logo" src={ logo } alt="logo"/>
            </header>
              <div className="login-buttons-container">
                <Button
                  onClick={() => router.push('/user/register')}
                  variant="contained">Start Over
                </Button>
          </div>
       </>
   );
};

export default Results
