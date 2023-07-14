import React from "react";

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2022/03/fandosensexniftyderivative-2-770x433.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title : "Title"}</h5>
            <span className="position-absolute top-0 badge bg-danger" style={{zIndex: 100, right: 0}}>{source ? source : "Anonymous"}</span>
            <p className="card-text">{description ? description : "Description"}</p>
            <p className="card-text"><small className="text-danger">By {author ? author : "Anonymous"}{date ? ` on ${new Date(date).toGMTString()}` : ""}</small></p>
            <a href={newsUrl ? newsUrl : "/"} target="_main" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}
