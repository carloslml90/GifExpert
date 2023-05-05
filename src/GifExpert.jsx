import { useState } from "react"
import { AddCategory } from "./Components/AddCategory"




export const GifExpert=()=>{
    const [categories, setCategories]=useState(['Dragon Ball'])

    console.log(categories)

const onAddCategory=(newCategory)=>{
    if(categories.includes(newCategory)) return;
   
 setCategories([newCategory,...categories])}
 
return(

<>
{/*tittle*/ }

<h1>Gif Expert </h1>


{/*imput*/}
<AddCategory 
//onNewCategory={(event=>onAddCategory(event))}
setCategories={setCategories}

/>


<button onClick={onAddCategory}> Add categorie</button>

<ol>
{
    categories.map(category =>{ return <li key={category}>{category}</li>})

}
</ol>
</>
)}