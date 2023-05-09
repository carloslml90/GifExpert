import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"





export const GifExpert=()=>{

const [categories,setCategories]=useState(['Breaking bad', 'Arkhane']);
const onAddCategory=()=>{
setCategories([...categories, 'Ozark'])

} 
console.log (categories);

        return(
             <>

                 {/*title */}
                <h1>Gif Expert </h1>

                  {/*Innput */}

                  <AddCategory setCategories={setCategories}/>
                  
                  <button onClick={onAddCategory}> Add </button>
                  {/*Categorie list */}

                  <ol>
                    {categories.map(category=>{return <li key={category}>{category}</li>})}
                  </ol>


                </>
        ) 

}