
import { useState, useEffect } from "react";
import { GetGifs } from "../Helpers/Getgifs";
export const useFetchGifs=(category) =>{

 
    const [images,setImages]=useState([]);
    const [isLoading, setIsLoading]= useState(true);
    
 
      const getImages=async()=>{
             const newImages =await GetGifs(category);
            setImages(newImages);
            setIsLoading(false);
            }
            
            useEffect( () =>{
                
                
                getImages();
            }, []);
            
            return{
                
                images,
                isLoading
                
}

}