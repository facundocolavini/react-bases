import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useForm } from '../../hooks';
import { GetActiveNote } from '../../models';
import { AppDispatch, RootState } from '../../store';
import {
  journalState,
  setActiveNote,
  startDeleteNote,
  startSaveNote,
  startUploadingFiles,
} from '../../store/journal';
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
  // Simulando click en mi IconButton para la carga de archivos
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dateString = useMemo(() => FormatDate(date), [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  // console.log({formState, activeNote});
  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files?.length === 0 || null) return;
    console.log(target.files);

    dispatch(startUploadingFiles(target?.files as FileList));

    Swal.fire(
      'Archivos subidos con exito',
      ` Se adjuntaron ${target.files?.length} archivos `,
      'success',
    );
  };

  const onDelete = () => {
    dispatch(startDeleteNote());
  };
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
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
        <Button color="primary" disabled={isSaving} onClick={() => fileInputRef.current?.click()}>
          <UploadFileOutlined sx={{ fontSize: 30, mr: 1 }} />
          Subir Archivo
        </Button>
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
      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      <ImageGallery
        images={
          activeCurrentNote?.imageUrls !== undefined
            ? activeCurrentNote.imageUrls
            : ([] as Array<string>)
        }
      />
    </Grid>
  );
});
