import {Article} from './article.js';
export function Section(props){
    let ArticlesJSX = props.sectionData.map(MakeArticle);
    return <div className="section-box">
        <h1 className="section-header" id={props.sectionName}>{props.sectionName}</h1>
        {ArticlesJSX}
    </div>
}

function MakeArticle(articleObj){
    console.log(articleObj);
    return <Article articleData={articleObj} />;
}