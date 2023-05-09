import { useState } from "react";


export const AddCategory=()=>{

    const [inputValue,setInputValue]=useState('Ozark ')
    console.log(inputValue);
        const onInputChange=(event) =>{
        setInputValue(event.target.value)
    }

        const onSubmit =(event)=>{
            event.preventDefault();
            console.log(inputValue);


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