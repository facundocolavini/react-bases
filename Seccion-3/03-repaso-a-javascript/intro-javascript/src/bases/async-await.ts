
//Async transforma el return de la funcion en una promesa 
const API_KET: string = 'CvAxFMDxlfpl2V2fZjE5hWZ9SkdabeX0';
const URL: string = `https://api.giphy.com/v1/gifs/random?api_key=${API_KET}`;

const getImage = async () => {
    try {
        //Await espera a que la promesa termine a que ejecute la siguiente linea de codigo
        const response = await fetch(`${URL}`);
        const { data } = await response.json();
        const { url } = data.images.original
        console.log(url)
        const img = document.createElement('img');
        img.src= url;
        document.body.append(img)
    }catch(error){
        //Manejo del error
        console.log(error)
    }
}

 getImage()


export {}