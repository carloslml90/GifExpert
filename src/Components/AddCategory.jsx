import { useState } from "react";


export const AddCategory=({setCategories})=>{

    const [inputValue,setInputValue]=useState(' ')
    console.log(inputValue);
        const onInputChange=(event) =>{
        setInputValue(event.target.value)
    }

        const onSubmit =(event)=>{
            event.preventDefault();
            if(inputValue.trim().length <=4 ) return;
            setCategories((categories=>[inputValue, ...categories]))
            setInputValue("");

        }

                return(

                    <form  onSubmit={(event)=>onSubmit(event)}>

                        <input
                        type="text"
                        value={inputValue}
                        placeholder="looking for a serie"
                        onChange={(event)=>onInputChange(event)}

                        />
                    </form>

                )

} 