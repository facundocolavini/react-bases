export interface Note {
    id: string,
    title: string,
    body: string,
    date: number,
    imageUrls?: NoteWithImages
}
type NoteWithImages = Array<string>

export type NewNoteType = Pick<Note, "title" | "body" | "date" | "id">

export type MessageSavedTypes = 'saved' | 'not-saved';
