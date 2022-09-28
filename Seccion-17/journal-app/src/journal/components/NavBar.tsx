import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Grid, Typography } from '@mui/material';

type Props = {
	drawerWidth: number;
};
export const NavBar = ({ drawerWidth }: Props) => {
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
					<IconButton color="error">
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
