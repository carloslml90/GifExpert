import { useState } from "react"
import { AddCategory, GifGrid } from "./Components"






export const GifExpert=()=>{

const [categories,setCategories]=useState(['Breaking bad']);


//This function write in my input a new category to submit
        const onAddCategory=(newCategory)=>{
          if (categories.includes(newCategory)) return;
        setCategories([newCategory,...categories])
        } 



console.log (categories);

        return(
             <>

                 {/*title */}
                <h1>Gifs Expert </h1>

                  {/*Input */}

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