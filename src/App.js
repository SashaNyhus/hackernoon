import './App.css';
import {hackerNoonArticles} from './modules/hackerNoonArticles.js';
import {footerData} from './modules/footer-data.js';
import {Header} from './modules/header.js';
import {SubNav} from './modules/sub-nav.js';
import {Section} from './modules/section.js';
import {Footer} from './modules/footer.js';

function App() {
  let SectionsJSX = MakeSectionsJSX(hackerNoonArticles)
  return <div>
    <Header />
    <SubNav hackerNoonData={hackerNoonArticles} />
    {SectionsJSX}
    <Footer footerObj={footerData} />
  </div>
}

function MakeSectionsJSX(hackerNoonData){
  let keysArray = Object.keys(hackerNoonData);
  let sectionsArray = keysArray.map(sectionKey => {
    return <Section sectionName={sectionKey} sectionData={hackerNoonData[sectionKey]} />
  })
  return sectionsArray;
}

export default App;
