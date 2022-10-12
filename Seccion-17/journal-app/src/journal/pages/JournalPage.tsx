// import { MailOutline } from '@mui/icons-material';
import { AddOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { journalState, startNewNote } from '../../store/journal';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';

type Props = {};

export const JournalPage = (props: Props): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const {
    notes,
    isSaving,
    active: activeNote,
  }: journalState = useSelector((state: RootState) => state.journal);

  //Si el status cambia renderiza el nuevo valor
  // const isAuthenticated = useMemo(() => status === 'checking-credentials', [status]);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!activeNote ? <NoteView /> : <NothingSelectedView />}
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
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
