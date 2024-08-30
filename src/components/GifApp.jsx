import { useState } from "react"
import { useGif } from "../hooks/useGif"
import 'bootstrap/dist/css/bootstrap.min.css'


export const GifApp = () => {

  const[categoria, setCategoria] = useState('')

  const {handleGetGif, arregloGifs} = useGif()

  return (
    <>
      <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50" style={{padding: '10px'}}>
        <form className="d-flex" onSubmit={(e) => {handleGetGif(categoria, e)}}>
          <input type="text" onChange={(e) => {setCategoria(e.target.value)}}/>
          <input className="btn btn-dark" type="submit" value="Buscar Gif" />
        </form>
      </div>
      <div className="img-fluid d-flex flex-row justify-content-center alig-items-center row row-cols-2 row-cols-lg- g-2 g-lg-2" style={{padding: '10px'}}>
        {arregloGifs.map(({id, url}) => {
              return(
                <img key={id} src={url} alt="" />
              )
        })}
      </div>
    </>
  )
}
