export const getGifs = async( category :string ): Promise<object | string> =>{
   
    const url : string = `https://api.giphy.com/v1/gifs/search?api_key=UVWfkj9YKrlJA4MLHjqqL2Xt4u6NQQuD&q=${category}&limit=10`;
    const resp : Response = await fetch( url )
    const { data = [] } =  await resp.json();
    
    // Esta funcion recorre el array de gif armando un objeto con las propiedades que me interesan'
    const gifs = data.map( (img: any) =>({
      id:  img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))

    return gifs
  }