import {
	Box,
	Divider,
	Drawer, List, Toolbar,
	Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { authState } from '../../store/auth';
import { journalState, startActiveNote } from '../../store/journal';
import { SideBarListItems } from './';

type Props = {
	drawerWidth: number;
};
export const SideBar = ({ drawerWidth = 240 }: Props) => {
	const dispatch: AppDispatch = useDispatch();

	const { displayName }: authState = useSelector((state: RootState) => state.auth);
	const { notes }: journalState = useSelector((state: RootState) => state.journal);


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
						{ displayName }
					</Typography>
				</Toolbar>
				<Divider /> 
				<List>
					{notes.map((note)  => (
						<SideBarListItems  key={note.id} {...note}/>
					))}
				</List>
				
			</Drawer>
		</Box>
	);
};
