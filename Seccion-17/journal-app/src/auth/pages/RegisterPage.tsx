import { Alert, Link } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks';
import { formRegisterValidator, initialRegister, RegisterUser } from '../../models';
import { AppDispatch, RootState } from '../../store';
import { authState, reset } from '../../store/auth';
import { startCreatingUserWithAndEmailPassword } from '../../store/auth/thunks';
import { AuthLayout } from '../layout';


export const RegisterPage = (): JSX.Element => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()
  const dispatch: AppDispatch = useDispatch();
  const { status, errorMessage }: authState = useSelector((state: RootState) => state.auth);

  const isCheckingAuthentication = useMemo(()=> status === 'checking-credentials' , [status])
  const { 
      formState,
      displayName,
      email,
      password,
      displayNameValid,
      passwordValid,
      emailValid,
      isFormValid,
      onInputChange 
  } = useForm<RegisterUser>( initialRegister, formRegisterValidator );

  const goToLoginPage = () => {
    dispatch(reset())
    navigate('/auth/login',{
      replace:true
    });
  }
  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if(!isFormValid) return
    setFormSubmitted(true)
    dispatch(startCreatingUserWithAndEmailPassword(formState));
    
  };

  return (
    <AuthLayout title={'Crear cuenta'}>
      <h1>Form Valid: {isFormValid ? 'Valido' : 'Invalido'}</h1>
      <form className="animate__animated animate__fadeIn animate__faster" onSubmit= {onSubmit} noValidate>
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
              helperText={ displayNameValid }
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
              helperText= { emailValid}
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
              helperText= { passwordValid }
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>{ errorMessage } </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button disabled={ isCheckingAuthentication } type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography color="initial" sx={{ mr: 1 }}>
              Ya tenes cuenta?
            </Typography>
            <Link component="button" onClick={goToLoginPage} color="inherit" >
              registrate
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
