// import { MailOutline } from '@mui/icons-material';
import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';

type Props = {};

export const JournalPage = (props: Props): JSX.Element => {
	return (
		<JournalLayout>
			<NothingSelectedView />
			{/* <NoteView /> */}
			<IconButton
				size="large"
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
