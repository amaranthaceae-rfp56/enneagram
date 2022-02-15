import React, { ReactDOM, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, Button, Box, TextField, Typography } from '@mui/material'
import axios from 'axios'
import logo from '../../assets/eneagrama.png'
import styles from './registration.module.css'


type RegisterProps = {
};

const Registration = () => {

  const router = useRouter()

  const [userNotFound, setUserNotFound] = useState<boolean>(false)

  let registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let target = e.target as typeof e.target & {
      firstName: { value: string};
      lastName: { value: string };
      email: { value: string };
    };

    await axios.post('/user/create', {
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      email: target.email.value
    })
  }

  let loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let target = e.target as typeof e.target & {
      email: { value: string };
    };

    let currentUser = await axios.get(`/user/email/${ target.email.value }`)
    console.log('the current user is: ', currentUser)

    if (currentUser.data === '') {
      setUserNotFound(true)
    } else {
      router.push({
        pathname: '/test',
        query: { uid: currentUser.data.id }
      })
    }
  };

  return (

    <Container maxWidth='xl'>
      <Box component='header'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 8
        }}
      >
        <Typography
          color='primary'
          variant='h3'
          align='center'
          className='title'>
          The Enneagram Survey
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 4
        }}
      >
        <Image
          className="enneagram-logo"
          src={ logo }
          width={80}
          height={80}
          alt="logo"/>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          m: 2,
        }}
      >
        <Box
          component='form'
          sx={{
            border: 2,
            borderRadius: 4,
            borderColor: 'secondary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 300,
            // backgroundColor: "secondary.main",
            m: 2,
            // '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={registerUser}
        >
          <Typography sx={{ my: 2 }}
            color='primary'
            variant='h6'
            align='center'
            className='title'>
            Register new user
          </Typography>
          <TextField
            required
            id="firstName"
            label="First Name"
            variant="outlined"
            style={{ width: '80%', margin: 5 }}
            InputProps={{ style: { fontSize: 18, color: '#494f5b' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <TextField
            required
            id="lastName"
            label="Last Name"
            variant="outlined"
            style={{ width: '80%', margin: 5 }}
            InputProps={{ style: { fontSize: 18, color: '#494f5b' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            style={{ width: '80%', margin: 5 }}
            InputProps={{ style: { fontSize: 18, color: '#494f5b' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <Button sx={{ my: 4 }}
            style={{ width: '80%' }}
            color="primary"
            type="submit"
            variant="contained">
            Register
          </Button>
        </Box>
        <Box
          component="form"
          sx={{
            border: 2,
            borderRadius: 4,
            borderColor: 'secondary.main',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 300,
            // backgroundColor: "secondary.main",
            m: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={loginUser}
        >
          <Typography sx={{ my: 2 }}
            color='primary'
            variant='h6'
            align='center'
            className='title'>
            Login
          </Typography>
          <TextField
            required
            id="email"
            label={ userNotFound ? 'Incorrect Email' : 'Email' }
            variant="outlined"
            error={userNotFound ? true : false}
            helperText={userNotFound ? 'USER NOT FOUND!' : false}
            onChange={ () => setUserNotFound(false) }
            style={{ width: '80%', margin: 5 }}
            inputProps={{ style: { fontSize: 18, color: '#494f5b' } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <Button sx={{ my: 4 }}
            style={{ width: '80%' }}
            color="primary"
            type="submit"
            variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Container>
   );
};

export default Registration;



// function Form() {
//   const registerUser = async (event: { preventDefault: () => void; target: { name: { value: any; }; }; }) => {
//     event.preventDefault()

//     const res = await fetch('/api/register', {
//       body: JSON.stringify({
//         name: event.target.name.value
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       method: 'POST'
//     })

//     const result = await res.json()
//     // result.user => 'Ada Lovelace'
//   }

//   return (
//     <form onSubmit={registerUser}>
//       <label htmlFor="name">Name</label>
//       <input id="name" name="name" type="text" autoComplete="name" required />
//       <button type="submit">Register</button>
//     </form>
//   )
// }
