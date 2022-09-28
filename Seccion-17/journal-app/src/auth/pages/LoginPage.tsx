import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Google } from '@mui/icons-material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout';

export const LoginPage = (): JSX.Element => {
	return (
		<AuthLayout title={'Login'}>
			<form>
				<Grid container>
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
						<Grid item xs={12} sm={6}>
							<Button variant="contained" fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" fullWidth>
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
