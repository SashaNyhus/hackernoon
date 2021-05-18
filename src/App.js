import logo from './logo.svg';
import './App.css';
import Article from './modules/article.js'
import {hackerNoonArticles} from './hackerNoonArticles.js'

function App() {
  Article.defaultProps = hackerNoonArticles.Programming[1];
  return <Article />;
}

export default App;
