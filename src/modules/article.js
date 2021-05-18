export default function Article(props){
    console.log(props.titleLink);
    return <div className="article-box">
        <h2>{props.titleText}</h2>
        <div className="image-box">
            <a href={props.titleLink}>
                <img className="article-img" src="images/default-image.jpeg" alt={props.titleText}/>
            </a>
        </div>
        <div className="tag">{props.hashTag}</div>
        <div className="data-box">
            <div className="author-box">
                <img className="author-profile" src={props.avatarSrc} alt=""/>
                <div className="author-text">
                    <h3>{props.userName}</h3>
                    <h4>{props.author}</h4>
                </div>
            </div>
            <div className="times-box">
                <p>{props.readIn}</p>
                <p>{props.posted}</p>
            </div>
        </div>
    </div>;
}