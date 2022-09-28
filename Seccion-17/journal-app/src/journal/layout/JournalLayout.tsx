import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { NavBar, SideBar } from '../components';

type Props = {
	children: JSX.Element | JSX.Element[];
};

const drawerWidth: number = 280;

export const JournalLayout = ({ children }: Props) => {
	return (
		<Box sx={{ display: 'flex' }}>
			{/* Navbar draweWidth */}
			<NavBar drawerWidth={drawerWidth} />
			{/* Sidebar drawerWidth */}
			<SideBar drawerWidth={drawerWidth} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				<Toolbar></Toolbar>
				{children}
			</Box>
		</Box>
	);
};
