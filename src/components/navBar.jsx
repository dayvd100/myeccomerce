import { Link } from "react-router-dom";
import { useState } from "react";
import "./navBar.css"
// import axios from "axios";
// import icon-jordan.png from "../images/icon-jordan.png"
// import iconJordan from "../images/pngegg.png"

const NavBar = () => {

    const [iconTenis, setIconTenis] = useState(true);
    const [iconMoletom, setIconMoletom] = useState(true);
    const [iconSnkrs, setIconSnkrs] = useState(true);

    return (
       
        <div className="navBar-main">
            <div className="navBar">
            <ul className="lista-de-links">
           
                {iconTenis ?  <li><Link onMouseOver={() => setIconTenis(false)} onMouseLeave={() => setIconTenis(true)} className="link-navBar" to="/tenis">Jordan</Link></li>:
                 <Link to="/tenis"><img src="https://static.nike.com.br/v10-76-0/images/brands/jordan.svg" className="jordan-icon" alt="icone" onMouseLeave={() => setIconTenis(true)}/></Link>}

                {iconMoletom ?  <li><Link onMouseOver={() => setIconMoletom(false)} onMouseLeave={() => setIconMoletom(true)} className="link-navBar" to="/moletons">Moletons</Link></li>:
                 <Link to="/moletons"><img src="https://static.nike.com.br/v10-76-0/images/brands/logo.svg" className="nike-icon" alt="icone" onMouseLeave={() => setIconMoletom(true)}/></Link>}  


                {iconSnkrs?<li><Link onMouseOver={() => setIconSnkrs(false)} onMouseLeave={() => setIconSnkrs(true)} className="link-navBar" to="/calca"><img src="https://static.nike.com.br/v10-76-0/images/brands/snkrs.svg" alt="icone-snkrs" className="icon-snkrs"/></Link></li>
                : <Link to="calca"><img alt="img" className="icone-snkrs-red" src="https://static.nike.com.br/v10-76-0/images/brands/snkrs-red.svg" onMouseLeave={() => setIconSnkrs(true)}/> </Link>}
                
                <li><Link className="link-navBar" to="/contato">Contato</Link></li>
            </ul>
         </div>
    </div>
    
    )
}

export default NavBar;

