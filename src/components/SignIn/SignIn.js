/* eslint-disable no-unused-vars */
import { setLoginDataUser } from '../../store/authReducer';
import { useDispatch } from 'react-redux';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const [isRememberUser, setIsRememberUser] = React.useState(false);
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      primary: {
        main: '#414549',
      },
      custom: {
        main: '#0298A9',
      }
    },
  });

  const handleCheckboxRememberValue = (evt) => setIsRememberUser(evt.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const  password = data.get('password');
    const  email = data.get('email');
    if (email.length && password.length) {
      dispatch(setLoginDataUser({email: email, isAuth: true}));
      isRememberUser && localStorage.setItem('loginDataUser', JSON.stringify({email: email, isAuth: true}));
      navigate('/my-profile/');
    } else alert('Необходимо заполнить все поля');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{textAlign: 'start', marginLeft: '0px'}} maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{alignSelf: 'flex-start'}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container >
              <Grid item xs>
                <Link href="#" variant="body2" sx={{textDecoration: 'none', color: 'rgba(0, 0, 0, .7)'}}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Grid container sx={{flexDirection: 'column'}}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='custom'
                sx={{ mt: 3, mb: 2, width: '160px', color: '#fff' }}
              >
                Sign In
              </Button>
              <FormControlLabel
                control={<Checkbox onChange={handleCheckboxRememberValue} value="remember" color="custom" />}
                label="Remember me"
              />
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}