export function SubNav(props){
    let sectionNames = Object.keys(props.hackerNoonData);
    console.log(sectionNames)
    let navLinks = MakeNavLinks(sectionNames);
    return <div className="sub-nav">
        {navLinks}
    </div>
}

function MakeNavLinks(sectionNamesArray){
    return sectionNamesArray.map(name => {
        let linkAddress = ("#" + name);
        return <a href={linkAddress}>{name}</a>;
    });
}