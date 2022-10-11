import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { startLogOutUser } from '../../store/auth/thunks';

type Props = {
	drawerWidth: number;
};
export const NavBar = ({ drawerWidth }: Props) => {
	const dispatch: AppDispatch = useDispatch();

	const onLogOut = () => {
		dispatch(startLogOutUser())
	}

	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: {
					sm: ` sm: ${drawerWidth}px`,
				} /* Pantallas pequeñas son igual a 240 */,
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ mr: 2, display: { sm: 'none' } }}
				>
					<MenuOutlined />
				</IconButton>
				<Grid container direction="row" justifyContent="space-between">
					<Typography variant="h6" noWrap component="div">
						JournalApp
					</Typography>
					<IconButton onClick={onLogOut} color="error">
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
