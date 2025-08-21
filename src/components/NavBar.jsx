import { Link } from "react-router-dom";
import './degines/NavBarCss.css'
function NavBar(){
return(
    <div className="navbar">
    <img className="icon" src="https://img.favpng.com/24/5/21/movie-icons-film-cinema-computer-icons-png-favpng-cvYkiJDZdcZghB8BEi73ZRACG.jpg" alt="nav" />
    <Link to="/">HOME</Link>
      <Link to="/Movis">MOVIES</Link>
      <Link to="/WatchList">WATCHLIST</Link>
    </div>

)
}
export default NavBar;