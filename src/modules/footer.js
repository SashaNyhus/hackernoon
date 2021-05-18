import {footerData} from './footer-data.js'
export function Footer(props){
    console.log(props)
    let footerNamesArray = Object.keys(props.footerObj);
    let FooterJSX = footerNamesArray.map(FooterSection);
    return <div className="footer-box">
    {FooterJSX}
    <a href="https://hackernoon.com/" className="hackernoon-link">Join HackerNoon</a>
    </div>
}

function FooterSection(footerName){
    let FooterLinksJSX = footerData[footerName].map(FooterLink)
    return <div className="footer-section">
        <h3>{footerName}</h3>
        {FooterLinksJSX}
    </div>
}

function FooterLink(props){
    return <a href={props.link}>{props.title}</a>;
}

