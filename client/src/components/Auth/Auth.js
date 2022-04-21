import React, {useState} from 'react'
import { Avatar, Container, Grid, Paper, TextField, Typography, Button } from '@material-ui/core';
import LcokOutlinedIcon from '@material-ui/icons/LockOutlined'
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import useStyles from './styles';
import Input from './Input';
import Icon  from './Icon';

const Auth = () => {

  const classes = useStyles();
  const state = null;
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = () => {

  }

  const handleChange = () => {

  }

  const switchMode = () => {

    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const handleShowPassword = (prevShowPassword) => !prevShowPassword

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({type: 'AUTH', data: {result, token} });
      history('/')
    } catch (error) {
      console.log(error);
    }

  };

  const googleFailure = () => {
    console.log('Google Sign In was unsuccessful');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LcokOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6} />
                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus xs={6} />
                </>
              )
            }
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}  
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <GoogleLogin 
                clientId='GOOGLE_CLIENT_ID'
                render={(renderProps) => (
                  <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>Google Sign In</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
              />
              <Button onClick={switchMode}>
                { isSignup ? 'Already ahve an account? Sign In' : 'Do not have an account? Sign up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper> 
    </Container>
  )
}

export default Auth