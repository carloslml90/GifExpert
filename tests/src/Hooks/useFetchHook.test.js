
import { renderHook, waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../../src/Hooks/useFetchHook"



describe('Testing our fetchHook',()=>{

    test('Should to thrown back initial state',()=>{


      const {result}=renderHook(()=>useFetchGifs('Dragon ball z'))
        console.log(result)
        const {images, isLoading}= result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);
    })

     test('Should return an images array and isloanding must be false',async()=>{

        const {result}=renderHook(()=>useFetchGifs('Dragon ball z'))

        await waitFor(

                ()=> expect(result.current.images.length).toBeGreaterThan(0)

        )
        ;
            const {images, isLoading}=result.current
            expect(images.length).toBeGreaterThan(0);
            expect(isLoading).not.toBeTruthy();
     })

})