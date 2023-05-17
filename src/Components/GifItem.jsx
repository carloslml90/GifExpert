import PropTypes from "prop-types";


export const GifItem=({id, title, url})=>{

    console.log({id, title, url})
return(


<div className="card">

<img src={url} alt={title} />
<p id="title-img">{title}</p>

</div>

)





}

GifItem.propTypes={
id:PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
url:PropTypes.string,

}