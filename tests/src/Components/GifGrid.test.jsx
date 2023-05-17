import { GifGrid } from "../../../src/Components"
import  {render,screen} from  "@testing-library/react"
import { useFetchGifs } from "../../../src/Hooks/useFetchHook"

jest.mock("../../../src/Hooks/useFetchHook");

describe('Tests on my component <gifGrid/>',()=>{

const category='One punch';
      test('it should shows loading starting',()=>{
        


        const Gifs=[
          {id:"dsshsi", title:'el poder de Dios', url:'https://saitaman.com'
                },
              {id:"dhsdj", title:"castigo de Dios", url:"https://lalibertard.com"}];


        useFetchGifs.mockReturnValue({

          images:Gifs,
          isloading:false
        });

          render(<GifGrid  category={category}/>);
          screen.debug();
          expect(screen.getAllByRole('img').length).toBe(2)
        

      })


})