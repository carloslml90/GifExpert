import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"
import { GifGrid } from "./Components/GifGrid";





export const GifExpert=()=>{

const [categories,setCategories]=useState(['Breaking bad']);



const onAddCategory=(newCategory)=>{
  if (categories.includes(newCategory)) return;
setCategories([newCategory,...categories])
} 
console.log (categories);

        return(
             <>

                 {/*title */}
                <h1>Gif Expert </h1>

                  {/*Innput */}

                  <AddCategory
                  
                  //setCategories={setCategories}
                  
                  onNewCategory={(event)=>onAddCategory(event)}
                  />

           
              
                    {
                    
                      categories.map((category) =>(
                        <GifGrid key={category}
                        category={category}
                     
                        />
                    ))
                    
                    }

                    
                  


                </>
        ) 

}