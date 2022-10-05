import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useForm } from '../../hooks';
import { initialRegister, formRegisterValidator } from '../../models';
import { AuthLayout } from '../layout';

export const RegisterPage = (): JSX.Element => {
  const { displayName, formState, email, password, onInputChange } = useForm(
    initialRegister,
    formRegisterValidator,
  );

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title={'Crear cuenta'}>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Nombre completo"
              type="text"
              placeholder="Facundo Colavini"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
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
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography color="initial" sx={{ mr: 1 }}>
              Ya tenes cuenta?
            </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              registrate
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
