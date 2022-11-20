
export const getImagen = async() => {

    try {

        const apiKey = '2ncFOuOQikMNxNQ0O4PdT22L9O31LO3o';
        //const apiKey = '321';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        return 'No encontrado'
    }
    
    
    
}



