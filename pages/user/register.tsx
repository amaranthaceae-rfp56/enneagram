import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'
import axios from 'axios'

type RegisterProps = {
};

const Register = () => {

  let registerUser = async (e) => {
    e.preventDefault()
    console.log('First Name: ', e.target.firstName.value)
    console.log('Last Name: ', e.target.lastName.value)
    console.log('Email: ', e.target.email.value)

  }

  return (
    <>
      <header className="enneagram-main">
        <div className="title">REGISTER NEW USER</div>
          </header>
            <div className="login-buttons-container">
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
                  variant="contained">Start Test
                </Button>
          </div>
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
