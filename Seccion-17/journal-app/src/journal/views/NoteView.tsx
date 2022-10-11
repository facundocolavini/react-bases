import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField } from '@mui/material';
import { ImageGallery } from '../components';

type Props = {};
export const NoteView = (props: Props) => {
	return (
		<Grid
			container
			direction={'row'}
			justifyContent="space-between"
			sx={{ mb: 1 }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light" color="initial">
					28 de Agosto
				</Typography>
			</Grid>
			<Grid item>
				<Button>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Ingrese un título"
					label="Título"
					sx={{ border: 'none', mb: 1 }}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="¿Que sucedio el día de hoy?"
					label="Título"
					sx={{ border: 'none', mb: 1 }}
					minRows={5}
				/>
			</Grid>
			{/* Image Gallery */}
			<ImageGallery />
		</Grid>
	);
};
