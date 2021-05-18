export function Article(props){
    console.log(props.articleData.titleLink);
    return <div className="article-box">
        <h2>{props.articleData.titleText}</h2>
        <div className="image-box">
            <a href={props.articleData.titleLink}>
                <img className="article-img" src="images/default-image.jpeg" alt={props.articleData.titleText}/>
            </a>
        </div>
        <div className="tag">{props.articleData.hashTag}</div>
        <div className="data-box">
            <div className="author-box">
                <img className="author-profile" src={props.articleData.avatarSrc} alt=""/>
                <div className="author-text">
                    <h3>{props.articleData.userName}</h3>
                    <h4>{props.articleData.author}</h4>
                </div>
            </div>
            <div className="times-box">
                <p>{props.articleData.readIn}</p>
                <p>{props.articleData.posted}</p>
            </div>
        </div>
    </div>;
}