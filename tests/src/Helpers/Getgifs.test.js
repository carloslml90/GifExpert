import { string } from "prop-types";
import { GetGifs } from "../../../src/Helpers/Getgifs";
import { render } from "@testing-library/react";


describe('tests about my getGif function',()=>{


    test('I want to check out my function', async()=>{

        const gifs= await GetGifs('Breaking bad');
        //console.log(gifs);
        expect(gifs.length).toBeLessThan(11);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })

    },50000)










})