// ver explicacion https://stackoverflow.com/questions/36842158/arraytype-vs-type-in-typescript
export type UnwrapPromiseArray<T> = {
    [K in keyof T]: T[K] extends Promise<infer O> ? O : T[K];
}

export async function promiseAll<T extends ReadonlyArray<any>>(args: T): Promise<UnwrapPromiseArray<T>> {
    return Promise.all(args) as any;
}

