import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useForm } from '../../hooks';
import { initialLogin, LoginUser } from '../../models';
import { AppDispatch, RootState } from '../../store';
import { checkingUserAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { AuthLayout } from '../layout';
import { authState } from '../../store/auth';

export const LoginPage = (): JSX.Element => {
  const { email, password, onInputChange } = useForm<LoginUser>(initialLogin);
  const dispatch: AppDispatch = useDispatch();
  const { status }: authState = useSelector((state: RootState) => state.auth);

  //Si el status cambia renderiza el nuevo valor
  const isAuthenticated = useMemo(() => status === 'checking-credentials', [status]);
  console.log(status, 'auth');

  // Submit Login form
  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log({ email, password });
    dispatch(checkingUserAuthentication(email, password));
  };

  // Login with Google account
  const onGoogleSingIn = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title={'Login'}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticated}
                variant="contained"
                fullWidth
                onClick={onGoogleSingIn}
              >
                <Google>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Google>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
