//Navbar component to navigate through the website

export default function Navbar(){
    return <nav className="nav">
         <a href="/" className="site-title">BREW CREW</a>
         <ul>
             <li>
                 <a href="/pricing">PRICING</a>
                 <a href="/about">ABOUT</a>
             </li>
         </ul>
    </nav>
}