import { useState } from "react";

export const AddCategory=({setCategories})=> {

    const [inputValue, SetInputValue] =useState('');


            const setInputChange=({target})=>{
             console.log(target.value);
            SetInputValue(target.value);
}
const onSubmit=(event)=> {
    event.preventDefault();//this is used to evite console refresh after each input entry
    if(inputValue.trim().length<=4 ) return;
    setCategories(categories =>[inputValue, ...categories])

}

return(

    <form onSubmit={(event)=>onSubmit(event)} >
<input 
type="text"
placeholder="Buscar Gifs"
value={inputValue}
onChange={setInputChange}/>
</form>)

}