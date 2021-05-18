import logo from './logo.svg';
import './App.css';
import Article from './modules/article.js'
import {hackerNoonArticles} from './modules/hackerNoonArticles.js'
import {Section} from './modules/section.js'  

function App() {
  Section.defaultProps = hackerNoonArticles.Programming;
  return <Section SectionData={hackerNoonArticles.Programming}/>;
}

export default App;
