import React from 'react';

const Newsitem = (props) => {
  // Destructuring props
  let { title, description, imgUrl, newsUrl, date, author, source } = props;

  return (
    <div className="container my-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={
            !imgUrl
              ? "https://images.barrons.com/im-835800/social"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}{" "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} On{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
