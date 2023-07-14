import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import LoadingSpinner from "./LoadingSpinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const updateNews = async (id) => {
      props.setProgress(10);
      setArticles([]);
      setLoading(true);
      props.setProgress(20);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + id}&pageSize=${props.pageSize}`;
    props.setProgress(60);
    let data = await fetch(url);
    props.setProgress(100);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page + id);
  };

  useEffect(() => {
    updateNews(0);
    document.title = `NewsMonkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
    // eslint-disable-next-line
  }, []);
  
  const addNews = async (id) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + id}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + id);
  };

  const fetchMore = async () => {
    addNews(1);
  };

  return (
    <div className="container my-4" style={{paddingTop: "5vh"}}>
      <h1 className="text-center my-4">
        NewsMonkey - Top{" "}{props.category.charAt(0).toUpperCase() + props.category.slice(1)}{" "}Headlines
      </h1>
      {loading && <LoadingSpinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMore}
        hasMore={articles.length !== totalResults}
        loader={<h1 className="my-4">Loading...</h1>}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <NewsItem
                    imageUrl={ele.urlToImage}
                    title={ele.title}
                    description={ele.description}
                    newsUrl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                    source={ele.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
