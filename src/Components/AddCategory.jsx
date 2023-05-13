import { useState } from "react";


export const AddCategory=({onNewCategory})=>{

    const [inputValue,setInputValue]=useState(' ')
    //console.log(inputValue);


        const onInputChange=(event) =>{
        setInputValue(event.target.value)
        }

        const onSubmit =(event)=>{
            event.preventDefault();
            if(inputValue.trim().length <=4 ) return;
            onNewCategory(inputValue.trim());
            setInputValue("");//clear our input box after added an element to categories 
  
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