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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{textAlign: 'start'}} maxWidth="xs">
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
                sx={{ mt: 3, mb: 2, width: '160px' }}
              >
                Sign In
              </Button>
              <FormControlLabel
                control={<Checkbox value="remember" color="custom" />}
                label="Remember me"
              />
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}