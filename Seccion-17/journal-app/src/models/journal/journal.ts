export interface Note {
    id: string,
    title: string,
    body:string,
    date: Date,
    imageUrls: Array<string>
}

export type MessageSavedTypes = 'saved' | 'not-saved';
