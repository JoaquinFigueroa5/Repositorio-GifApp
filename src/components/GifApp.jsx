import { useState } from "react"
import { useGif } from "../hooks/useGif"
import 'bootstrap'


export const GifApp = () => {

  const[categoria, setCategoria] = useState('')

  const {handleGetGif, arregloGifs} = useGif()

  return (
    <>
      <div className="container d-flex flex-rpw justify-center">
        <form className="d-flex" onSubmit={(e) => {handleGetGif(categoria, e)}}>
          <input type="text" onChange={(e) => {setCategoria(e.target.value)}}/>
          <input className="btn btn-outline-sucess" type="submit" value="Buscar Gif" />
        </form>
      </div>
      <div>
        {arregloGifs.map(({id, url}) => {
              return(
                <img key={id} src={url} alt="" />
              )
        })}
      </div>
    </>
  )
}
