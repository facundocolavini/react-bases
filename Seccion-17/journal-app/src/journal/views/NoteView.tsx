import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { GetActiveNote } from '../../models';
import { AppDispatch, RootState } from '../../store';
import { journalState, setActiveNote } from '../../store/journal';
import { FormatDate } from '../../utils';
import { ImageGallery } from '../components';



type Props = {};
export const NoteView = (props: Props) => {
	const dispatch: AppDispatch = useDispatch();
	const { active:activeNote }: journalState = useSelector((state: RootState) => state.journal);
	const { date, title, body ,formState, onInputChange,initialValues } = useForm<GetActiveNote>(activeNote)
	
	const dateString = useMemo(()=> FormatDate(date)
	,[date])
	
	console.log({formState, activeNote});
	


/* 	useEffect(()=>{
		if( activeNote !== initialValues ){
			dispatch(setActiveNote(formState))
		}
	},[formState,dispatch]) */


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
					{dateString}
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
					name="title"
					value={title}
					onChange={onInputChange}
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
					name="body"
					value={body}
					onChange={onInputChange}
				/>
			</Grid>
			{/* Image Gallery */}
			<ImageGallery />
		</Grid>
	);
};
