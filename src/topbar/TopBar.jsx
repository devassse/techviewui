import "./topbar.css"

export default function TopBar() {
  return (
    <section className='top'>
        <div className="logo">
            <a href="#">
                <img src="./assets/imgs//techview-logo.png" alt="TechView Logo" />
            </a>
        </div>
        <div className="navigation">
            <nav className="menu">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Tech</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li className="language">
                        <a href="#"><i class="fa-solid fa-globe"></i></a>
                    </li>
                    <li className="search">
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="social">
        <div className="media">
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="profile">
            <img src="./assets/imgs/perfil.jpg" alt="Profile" />
        </div>
        </div>
    </section>
  )
}
