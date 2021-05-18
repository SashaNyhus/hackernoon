export default function Article(){
    return <div class="article-box">
        <h2>Article Title</h2>
        <div class="image-box">
            <img class="article-img" src="images/default-image.jpeg" />
        </div>
        <div class="tag">#programming</div>
        <div class="data-box">
            <div class="author-box">
                <img class="author-profile" src="https://hackernoon.com/images/HzWefNlq2pZkZcUGS9ud2aXzUkd2-p103304.jpeg"/>
                <div class="author-text">
                    <h3>@author</h3>
                    <h4>Author Name</h4>
                </div>
            </div>
            <div class="times-box">
                <p>2min read</p>
                <p>12 hours ago</p>
            </div>
        </div>
    </div>;
}