// import React, { Component } from 'react'
import React  from 'react'


const Newsitem =(props)=>{
    let {title,description,imgUrl,newsUrl,publish,author,source}=props;
    return (
      <div className='my-3'>
      
        
        <div className="card " >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>
    {source}
  </span>
  <img src={!imgUrl?"https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} ...</h5>
    <p className="card-text">{description} ...</p>
    <p className="card-text"><small className="text-muted">By {!author?"null":author} on {new Date(publish).toGMTString()}</small></p>

    <a href={newsUrl} rel="noreferrer" target ="_blank"className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
  
}

export default Newsitem
