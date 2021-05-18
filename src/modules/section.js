import {Article} from './article.js';
import {hackerNoonArticles} from './hackerNoonArticles.js'
export function Section(props){
    let SectionsJSX = props.SectionData.map(MakeArticle);
    return <div className="section-box">
        <h1 className="section-header">Programming</h1>
        {SectionsJSX}
    </div>
}

function MakeArticle(articleObj){
    console.log(articleObj);
    return <Article articleData={articleObj} />;
}