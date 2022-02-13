import * as React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegistrationTextField = styled(TextField)<TextFieldProps>(() => ({
  variant: "outlined",
  width: '80%',
  margin: 5,
  '& .MuiInputLabel': {
    fontSize: 14,
    color: "primary",
  },
  '& .MuiInput': {
    fontSize: 18,
    color: '#494f5b',
  }
}));

export default function StyledCustomization() {
  return <RegistrationTextField />;
}