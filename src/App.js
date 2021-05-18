import './App.css';
import {hackerNoonArticles} from './modules/hackerNoonArticles.js'
import {Section} from './modules/section.js'  

function App() {
  let SectionsJSX = MakeSectionsJSX(hackerNoonArticles)
  return SectionsJSX;
}

function MakeSectionsJSX(hackerNoonData){
  let keysArray = Object.keys(hackerNoonData);
  let sectionsArray = keysArray.map(sectionKey => {
    return <Section sectionName={sectionKey} sectionData={hackerNoonData[sectionKey]} />
  })
  return sectionsArray;
}

export default App;
