export const GifItem=({id, title, url})=>{

    console.log({id, title, url})
return(


<div className="card">

<img src={url} alt={title} />

</div>

)





}