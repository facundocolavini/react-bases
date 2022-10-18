export interface RespFileUploaded {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: string;
    tags: any[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    folder: string;
    access_mode: string;
    original_filename: string;
}

export const fileUploadToCloudDinary = async (file: File): Promise<string> => {

    if (!file) throw new Error(`File not found to upload`);
    const cloudUrl = `${import.meta.env.VITE_REACT_APP_CLOUDINARY_BASE_URL}/upload`
    const formData = new FormData();
    // Agregamos a mi form-data los parametros que le enviamos atravez del body en mi peticion post
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file)

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (!resp.ok) throw new Error(`No se pudo subir la imagen`);
        const cloudResp: RespFileUploaded = await resp.json();


        return cloudResp.secure_url;

    } catch (error: any) {
        console.log(error);

        throw new Error(error?.message)
    }
}