
import { AddCategory } from "../../../src/Components";
import { fireEvent, render, screen } from "@testing-library/react";

describe('All of our test from <addcategory/>',()=>{

    test('should changes the input value',()=>{
        
        render(<AddCategory onNewCategory={()=>{}}  />)
        
     

        //screen.debug();
        const input=screen.getByRole('textbox');

        fireEvent.input(input,{target:{value:'hola guapo'}});

        expect(input.value).toBe('hola guapo');
    })

    test('Getting Submit on  our form',()=>{


            const inputValue= 'Gundam Wing';
            const onNewCategory=jest.fn();
            
            //TODO:??
            
            render(<AddCategory onNewCategory={onNewCategory}  />)
            const input= screen.getByRole('textbox');
            const form= screen.getByRole('form');
            fireEvent.input(input,{target:{value:inputValue}});
            fireEvent.submit(form);
            screen.debug();
            expect(input.value).toBe('');

            expect(onNewCategory).toHaveBeenCalled();
            expect(onNewCategory).toHaveBeenCalledWith(inputValue);
            expect(onNewCategory).toHaveBeenCalledTimes(1);

    })

        test(`Shouldn't call the function if input is empty `,()=>{
            const onNewCategory=jest.fn();
            render(<AddCategory onNewCategory={onNewCategory}  />)
            const form= screen.getByRole('form');
       


            fireEvent.submit(form)
            expect(onNewCategory).not.toHaveBeenCalled();



        } )


})