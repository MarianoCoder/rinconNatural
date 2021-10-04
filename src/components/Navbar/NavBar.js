import * as React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {NavLink, Link} from "react-router-dom";
import {useCart} from "../../context/CartContext"


function NavBar() {
  const { cart } = useCart();

  
   /* const [isLoggedIn,setIsLoggedIn] = React.useState(false);

    const handleClick = () =>{
      if (isLoggedIn === true) {
        setIsLoggedIn(false)
      }else{
        setIsLoggedIn(true)
      }
    };*/
    
    return (
        <nav className="navbar">
        <span className="brand"><Link to="/">Rincón Natural</Link></span>
        
      <ul>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/category/Reposteria/">Reposteria</NavLink>
        </li>
        <li>
        <NavLink to="/category/Frutos/">Frutos Secos</NavLink>
        </li>
        <li>
        <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          {
            cart.length !== 0 && <span>{cart.length}</span>
        
          }
        <NavLink to="/cart"> Carrito</NavLink>
        </li>
      </ul>
      <CartWidget
      src="data:image/jpeg;base64,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" />
      

        </nav>
    )
}

export default NavBar;
