

export interface GetNotes extends Note {
    id: string;
}
export interface CreateNote extends Note {
    id?: string
}

export type GetActiveNote = GetNotes | null

export interface Note {
    title: string,
    body: string,
    date: number | null,
    imageUrls?: NoteWithImages
}
type NoteWithImages = Array<string>

export type NewNoteType = Pick<Note, "title" | "body" | "date">

export type MessageSavedTypes = 'saved' | 'not-saved';
