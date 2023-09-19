import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const UpdateNews = async () => {
    props.setprogress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=a7be4964cb0f484da35ccf41b28b8b28&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    console.log(parsedData);
    props.setprogress(100);
  };

  useEffect(() => {
    document.title = `${props.category} - Candle News`;
    UpdateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=a7be4964cb0f484da35ccf41b28b8b28&page=${
      page
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles) || []);
    setLoading(false);
    setLoading(true);
  };

  return (
    <>
      <div className="text-center">
        <h1>My Candle News - Top {props.category} headlines</h1>
      </div>
      <div className="container">
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.id}>
              <Newsitem
                title={element.title ? element.title.slice(0, 43) : " "}
                description={
                  element.description ? element.description.slice(0, 88) : " "
                }
                imgUrl={element.urlToImage}
                newsUrl={element.url}
                date={element.publishedAt}
                author={element.author}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      ></InfiniteScroll>
      {/* Rest of your code */}
    </>
  );
};

News.defaultProps = {
  country: "uk",
  pageSize: 4,
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
