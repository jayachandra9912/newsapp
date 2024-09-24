import React from 'react'
import noimage from "./noimage.jpg"

const NewsItem = (props) => {
  // constructor(){
  //   super();

  // }


  let { title, description, imageUrl, newsUrl, author, date, source } = props;




  return (
    <div className='my-3'>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">
            {source}
          </span>
        </div>

        <img src={!imageUrl ? noimage : imageUrl} height="230px" width="100%" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {!author ? 'Unknown' : author} on {!date ? 'Unknown' : new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem