import React from 'react'
import { TextField } from '@mui/material'
export default function LoginFormField({label}) {
  return (
      <TextField sx={{
        marginTop:"10px",
        width:"380px",
      }} id="outlined-basic" label={label} variant="outlined" />
  )
}
