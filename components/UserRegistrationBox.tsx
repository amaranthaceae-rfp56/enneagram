import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../src/theme'

type RegistrationBoxProps = {
  onSubmit: React.FormEventHandler;
}

const StyledBox = styled((props: BoxProps) => {

  return (

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
        m: 2,
        // backgroundColor: "secondary.main",
        // '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      {...props}
    />

  )})
  (({ theme }) => ({

}))

const UserRegistrationBox = (props: RegistrationBoxProps) => {
  return <StyledBox onSubmit={props.onSubmit} />;
}

export default UserRegistrationBox