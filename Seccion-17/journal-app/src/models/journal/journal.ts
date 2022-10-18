

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
    date: number,
    imageUrls:Array<string> 
}


export type GetPropFromNote = Pick<Note, "title" | "body" | "date" | "imageUrls"> ;

export type MessageSavedTypes = 'saved' | 'not-saved';

// Generics 