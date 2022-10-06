import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useForm } from '../../hooks';
import { formRegisterValidator, initialRegister, RegisterUser } from '../../models';
import { AuthLayout } from '../layout';


export const RegisterPage = (): JSX.Element => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { 
      displayName,
      email,
      password,
      displayNameValid,
      passwordValid,
      emailValid,
      isFormValid,
      onInputChange 
  } = useForm<RegisterUser>( initialRegister, formRegisterValidator );

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if(!isFormValid) return
    setFormSubmitted(true)
  };

  console.log(isFormValid)
  return (
    <AuthLayout title={'Crear cuenta'}>
      <h1>Form Valid: {isFormValid ? 'Valido' : 'Invalido'}</h1>
      <form onSubmit= {onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              label="Nombre completo"
              type="text"
              placeholder="Facundo Colavini"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={ !!displayNameValid && formSubmitted}
              helperText={formSubmitted && displayNameValid}
          />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              error={!!emailValid && formSubmitted }
              helperText= {formSubmitted && emailValid}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              autoComplete="off"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText= {formSubmitted && passwordValid }
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
