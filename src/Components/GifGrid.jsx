
import { GifItem } from "./GifItem";

import Proptypes from "prop-types"
import { useFetchGifs } from "../Hooks/useFetchHook";




export const GifGrid=({category})=>{

const {images, isLoading }=useFetchGifs(category);
console.log({isLoading});





    return(
        <>

 
    <h3>{category}</h3>

    {
    isLoading && (<h2>cargando...</h2>)
    }

       <div className="card-grid">

       
            {
            
            images.map(( image ) =>(

                <GifItem  
                key={image.id}
                {...image}
                />
              ))
            }
      </div>
    </>

    )


} 

GifGrid.propTypes={
category: Proptypes.string.isRequired,

}