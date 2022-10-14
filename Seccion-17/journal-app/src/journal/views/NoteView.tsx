import React, { useEffect, useMemo } from 'react';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks';
import { GetActiveNote } from '../../models';
import { AppDispatch, RootState } from '../../store';
import { journalState, setActiveNote, startSaveNote } from '../../store/journal';
import { FormatDate } from '../../utils';
import { ImageGallery } from '../components';

export const NoteView = React.memo(() => {
  const dispatch: AppDispatch = useDispatch();
  const {
    active: activeCurrentNote,
    messageSaved,
    isSaving,
  }: journalState = useSelector((state: RootState) => state.journal);
  const { date, title, body, formState, onInputChange, initialValues } =
    useForm<GetActiveNote>(activeCurrentNote);

  const dateString = useMemo(() => FormatDate(date), [date]);

  // console.log({formState, activeNote});
  const onSaveNote = () => {
    dispatch(startSaveNote());
  };
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

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
        <Button onClick={onSaveNote} disabled={isSaving}>
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
          label="Descripcion"
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
});
