import React, { ReactDOM, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type RegisterProps = {
};

const Register = () => {

  const router = useRouter()

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

    router.push({
      pathname: '/test',
      query: { uid: currentUser.data.id }
    })
  };

  return (
    <>
      <header className="enneagram-main">
        <div className="title">REGISTER NEW USER</div>
      </header>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={registerUser}
      >
        <TextField
          required
          id="firstName"
          label="First Name"
          variant="filled"
        />
        <TextField
          required
          id="lastName"
          label="Last Name"
          variant="filled"
        />
        <TextField
          required
          id="email"
          label="Email"
          variant="filled"
        />
        <Button
          color="success"
          type="submit"
          variant="contained">
            Register
        </Button>
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={loginUser}
      >
        <TextField
          required
          id="email"
          label="Email"
          variant="filled"
        />
        <Button
          color="success"
          type="submit"
          variant="contained">
            Login
        </Button>
      </Box>


        {/* <div className="login-buttons-container">
          <form onSubmit={registerUser}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" autoComplete="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" autoComplete="lastName" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" autoComplete="email" required />
            <button type="submit">Register</button>
          </form>
            <Button
              color="success"
              variant="contained">
                Start Test
            </Button>
          </div> */}
       </>
   );
};

export default Register;



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
