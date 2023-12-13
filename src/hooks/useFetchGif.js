import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//un hook es una funcion que te permite retornar varias variables
export const useFetchGifs =(category) =>{
        //const [counter, setCounter] = useState(10)
    // sirve para disparar efectos secundarios
    /* 
    algun proceso que queres ejecutar cuando algo suceda 
    */
    //cuando el componente se carga hay disparamos la peticion http
    const [images,setImage] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImage(newImages)
        setIsLoading(false)
    }
    useEffect(()=> {
        getImages()
    },[])
    // si deja las depencias vacia significa que solo se dispara cuando se renderiza el componente

    return{
        images,
        isLoading
    }
}