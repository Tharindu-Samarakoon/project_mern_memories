import { Grid, Icon, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React from 'react'

const Input = ({name, handleChange, label, half, autoFocus, type, handleShowPassword}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField name={name} 
        onChange={handleChange} 
        vairnat='outlined' 
        required 
        fullwidth 
        label={label} 
        autoFocus={autoFocus} 
        type={type} 
        InputProps={name === 'password'  {
            endAdornment: (
                <InputAdornment position='end' >
                    <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            ),
        }} 
        />
    </Grid>
  )
}

export default Input
//38.11