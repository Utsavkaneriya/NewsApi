

import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = () => {

    const [article, setArticles] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=992eb8659bba4130b2d94489594ad9be';
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.articles) {
                    setArticles(data.articles);
                }
            })
            .catch((error) => {
                console.error('Error fetching the news articles:', error);
            });
    }, []);
    return (
        <>

            <h2 className="text-center">Latest <span className="badge bg-danger my-4">News</span></h2>

            {
                
                article.map((news, index) => {
                    // console.log(news)
                    return <NewsItem key={index} title={news.title} description={news.description}
                        src={news.urlToImage} url={news.url} />
                })

                // articles.map
            }
        </>
    );
}
export default News;