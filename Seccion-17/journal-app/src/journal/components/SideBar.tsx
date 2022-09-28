import { TurnedInNot } from '@mui/icons-material';
import {
	Box,
	Divider,
	Drawer,
	Toolbar,
	Typography,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Grid,
	ListItemText,
} from '@mui/material';

type Props = {
	drawerWidth: number;
};
export const SideBar = ({ drawerWidth = 240 }: Props) => {
	return (
		<Box
			component="nav"
			sx={{
				width: { sm: drawerWidth },
				flexShrink: { sm: 0 },
			}}
		>
			<Drawer
				variant="permanent" // temporary si tenemos la intencion de ocultarlo o mostrarlo
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Facundo Colavini
					</Typography>
				</Toolbar>
				<Divider>
					<List>
						{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text: string) => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid container>
										<ListItemText primary={text} />
										<ListItemText secondary={'Texto secundario'} />
									</Grid>
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Divider>
			</Drawer>
		</Box>
	);
};
