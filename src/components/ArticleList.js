import React from 'react';
import axios from 'axios';

import ArticleCard from './ArticleCard';

const path = 'http://localhost:3001/api/articles';

// const articles = [{ title: 'I\'m an article', votes: 4 },
// { title: 'I\'m another article', votes: 5 },
// { title: 'I\'m an article too', votes: 2 }];

class ArticleList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    };
  }
  componentDidMount () {
    axios.get(path)
    .then(articles => {
      this.setState(
        {articles: articles.data.articles}
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }
  
  render () {
    const { articles} = this.state;
    return (
      <div id='ArticleList'>
        <h3 className='title is-3'>All Articles</h3>
        {articles.map(article => <ArticleCard title={article.title} votes={article.votes} key={article.title} />)}
      </div>
    );
  }
}

export default ArticleList;