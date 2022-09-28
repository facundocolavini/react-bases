import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Google } from '@mui/icons-material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout';

export const RegisterPage = (): JSX.Element => {
	return (
		<AuthLayout title={'Crear cuenta'}>
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							id=""
							label="Nombre completo"
							type="text"
							placeholder="Facundo Colavini"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							id=""
							label="Correo"
							type="email"
							placeholder="correo@gmail.com"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							id=""
							label="Contraseña"
							type="password"
							placeholder="Contraseña"
							fullWidth
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12}>
							<Button variant="contained" fullWidth>
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
