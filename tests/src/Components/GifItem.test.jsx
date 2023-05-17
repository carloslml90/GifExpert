import { render,screen} from "@testing-library/react";
import { GifItem } from "../../../src/Components";

describe('To prove our test suite',()=>{
    
    const title="Improving every day";
    const url="https://www.saitama.com/saitama.jpg";
    
    test( 'Making matching with snapshot', ()=>{

        const{container}=render(<GifItem  title={title} url={url}/>);
        
        expect(container).toMatchSnapshot();
        
        
    })

    test('Should show the  image with a correct url',()=>{

        render(<GifItem  title={title} url={url}/>);
       /*   screen.debug();

         expect(screen.getByRole('img').src).toBe(url);
         expect(screen.getByRole('img').alt).toBe(title); */

         const {src, alt}=screen.getByRole('img');
         expect(src).toBe(url);
         expect(alt).toBe(alt);
        })
        
        
    test('Should show my image title',()=>{
        
        render(<GifItem  title={title} url={url}/>);

        expect(screen.getAllByText(title)).toBeTruthy();

        
    })     
    



})


