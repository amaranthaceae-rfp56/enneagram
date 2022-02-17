import * as React from 'react';
import { OutlinedInputProps, TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../src/theme'

type RegistrationFieldProps = {
  id: string;
  label: string;
  error?: boolean;
  helperText?: string | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledTextField = styled((props: TextFieldProps) => {

  return (

    <TextField
      required
      variant="outlined"
      style={{ width: '80%', margin: 5 }}
      {...props}
      InputProps={{ style: { fontSize: 18, color: '#494f5b' } } as Partial<OutlinedInputProps>}
      InputLabelProps={{ style: { fontSize: 14 } }}
    />
  )
}) (({ theme }) => ({ }))

const UserRegistrationField = (props: RegistrationFieldProps) => {
  return <StyledTextField id={props.id} label={props.label} error={props.error} helperText={props.helperText} onChange={props.onChange} />;
}

export default UserRegistrationField


// export default function StyledCustomization() {
//   return <RegistrationTextField />;
// }