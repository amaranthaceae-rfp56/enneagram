import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Container, Button, Box, TextField, Typography } from '@mui/material'
import logo from '../../assets/eneagrama.png'
import styles from '../styles/Home.module.css'
import axios from 'axios'

const Results = () => {

  const router = useRouter()

  const { uid, etype, escore } = router.query

  const [enneatype, setEnneatype] = useState<string>('')
  const [enneatypeSummary, setEnneatypeSummary] = useState<string>('')

  const summaryGibberish = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  let getEnneatype = async () => {
    console.log('this is the etype', etype);
    let enneatype = await axios.get(`/enneatype/${ etype }`)
    setEnneatype(enneatype.data.name_english)
    setEnneatypeSummary(`${enneatype.data.summary_english} ${summaryGibberish}`)
    console.log('your enneatype is: ', enneatype.data.name_english)
  };

  useEffect(() => {
    getEnneatype()
  })


  return (
    <Container maxWidth='xl'>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>


        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mt: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography
              align='center'
              color='primary'
              variant='h5'>
              The Enneagram Survey
            </Typography>
            <Box sx={{ my: 1 }}>
              <Image
                className="enneagram-logo"
                src={logo}
                width={40}
                height={40}
                alt="logo" />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 250, }}>
              <Button
                color='secondary'
                onClick={() => router.push(`/user/registration`)}
                variant='contained'
                style={{ minHeight: 40, width: '80%' }}>
                Logout
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: 250, mt: 2 }}>
              <Button
                color='primary'
                onClick={() => router.push({
                  pathname: '/test',
                  query: { uid: uid }
                })}
                variant='contained'
                style={{ minHeight: 40, width: '80%' }}>
                Start Over
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 2, px: { sm: 14 } }}>
          <Typography
            sx={{ mt: 5 }}
            color='primary'
            align='center'
            variant='h5'>
            Your responses suggest you might be an enneatype:
          </Typography>
          <Typography
            sx={{ mt: 5 }}
            color='primary'
            align='center'
            variant='h4'>
            {etype} - {enneatype}
          </Typography>
          <Typography
            sx={{ mt: 5 }}
            color='#494f5b'
            align='center'
            variant='h5'>
            {enneatypeSummary}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Results
