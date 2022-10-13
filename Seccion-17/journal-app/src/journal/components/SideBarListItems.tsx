import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SyntheticEvent, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetNotes } from "../../models";
import { AppDispatch, RootState } from "../../store";
import { journalState, setActiveNote, startActiveNote } from "../../store/journal";

 

export const SideBarListItems = ({ title, body, id, imageUrls = [], date }: GetNotes) => {
    const dispatch: AppDispatch = useDispatch();

    const titleFormatted =  useMemo(()=>{
        return title.length > 17 ? title.substring(0, 17).concat('...') : title
    },[title])

    const onClickActiveNote = ( event: React.MouseEvent<HTMLElement>): void => {
        event.stopPropagation
        // dispatch(startActiveNote(id)); Mi solucion
        dispatch(setActiveNote({ title, body, id, imageUrls, date}))

    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickActiveNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container sx={{display: { xs: 'block' }}}>
                    <ListItemText primary={titleFormatted} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
