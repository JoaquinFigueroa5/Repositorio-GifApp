import { useState } from 'react'
import {reqGif} from '../service/gif'

export const useGif = () => {

    const [arregloGifs, setArregloGifs] = useState([])
    
    const handleGetGif = async(categoria, e) =>{

        e.preventDefault()
        
        await reqGif(categoria).then((arregloGifs) => {
          setArregloGifs(arregloGifs)
        })
    }

  return {
    handleGetGif,
    arregloGifs
  }
}
