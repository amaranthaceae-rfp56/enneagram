import React, { ReactDOM, useState, ComponentType, ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, Button, Box, TextField, Typography } from '@mui/material'
import UserRegistrationField from '../../components/UserRegistrationField'
import UserRegistrationBox from '../../components/UserRegistrationBox'
import axios from 'axios'
import logo from '../../assets/eneagrama.png'
import styles from './registration.module.css'

// type Props<Tag extends keyof JSX.IntrinsicElements> = {
//   tag?: ComponentType | keyof JSX.IntrinsicElements;
//   children?: ReactNode;
// } & JSX.IntrinsicElements[Tag];

type RegistrationProps = {
  // label: string;
  // keyof JSX.IntrinsicElements;
  // label?: keyof JSX.IntrinsicElements;
  // id?: keyof JSX.IntrinsicElements;
}
// & React.HTMLAttributes<HTMLOrSVGElement>;


const Registration: React.FunctionComponent = () => {

  const router = useRouter()

  const [userNotFound, setUserNotFound] = useState<boolean>(false)

  let registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let target = e.target as typeof e.target & {
      firstName: { value: string};
      lastName: { value: string };
      email: { value: string };
    };

    let currentUser = await axios.post('/user/create', {
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      email: target.email.value
    })

   router.push({
     pathname: '/test',
     query: { uid: currentUser.data.id }
   })

  }

  let loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let target = e.target as typeof e.target & {
      emailLogin: { value: string };
    };

    let currentUser = await axios.get(`/user/email/${ target.emailLogin.value }`)
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
          <UserRegistrationField
            id='firstName'
            label='First Name'
          />
          <UserRegistrationField
            id='lastName'
            label='Last Name'
          />
          <UserRegistrationField
            id='email'
            label='Email'
          />
          <Button sx={{ my: 4 }}
            style={{ width: '80%' }}
            // color="primary"
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
          <UserRegistrationField
            id="emailLogin"
            label={ userNotFound ? 'Incorrect Email' : 'Email' }
            error={userNotFound ? true : false}
            helperText={userNotFound ? 'USER NOT FOUND!' : false}
            onChange={ () => setUserNotFound(false) }
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
