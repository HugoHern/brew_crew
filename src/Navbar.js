//Navbar component to navigate through the website

export default function Navbar() {
    
    return <nav className="nav">
        <a href="/" className="site-title">BREW CREW</a>
        <ul>
           <CustomLink href='/pricing'>PRICING</CustomLink>
           <CustomLink href='/about'>ABOUT</CustomLink>
        </ul>
    </nav>
}

//custom component to keep track of active page
function CustomLink ({href, children, ...props}){
    //keep track of active page
    const path = window.location.pathname
    
    return(
        <li className={path === href ? 'active' : ''}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}