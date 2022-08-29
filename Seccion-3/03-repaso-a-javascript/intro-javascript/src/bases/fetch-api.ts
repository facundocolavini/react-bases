/* Fetch Api */
// https://developers.giphy.com/

const API_KET: string = 'CvAxFMDxlfpl2V2fZjE5hWZ9SkdabeX0';
const URL: string = `https://api.giphy.com/v1/gifs/random?api_key=${API_KET}`;

    //Fetch api with ts 
    function api<T>(url: string): Promise<T> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(({data}) => {
                return data
            })
            .catch((error: Error) => {
                console.error(error) /* <-- made up logging service */
                throw error /* <-- rethrow the error so consumer can still catch it */
            })
    }
      
    api(URL).then((response: any) => {
        const img = document.createElement('img');
        img.src= response?.images.original.url;
        document.body.append(img)
    }).catch(console.warn)

    // const peticion = fetch(`${URL}`)
    //  peticion.then(resp => {
        //  resp.json()
        //  .then(data => {
        //  const { url } = data.images.original.url
        //  const img = document.createElement('img');
        //  img.src= url;
        //  document.body.append(img)
            //  console.log(data)
        //  })
        // 
    // }).catch(console.warn)

    //Promesa en cadena
    // peticion.then(resp => {resp.json()})
    // .then( ({data} : any) =>{
        // const { url } = data.images.original.url
        // const img = document.createElement('img');
        // img.src= url;
        // document.body.append(img)
    // }).catch(console.warn)
   

export {}