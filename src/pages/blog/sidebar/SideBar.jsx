import "./sidebar.css";

export default function SideBar() {
  const mostready = [1,2,3,4,5,6]
  return (
    <aside className="sidebar">
      <div className="search-posts">
        <input type="search" name="" id="" placeholder="Pesquisar postes..." />
        <button>
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ color: "#ffffff" }}
          ></i>
        </button>
      </div>
      <div className="top-posts">
        <h4>Artigos mais lidos</h4>
        <ul>
        {mostready.map((mostly) => (
              <li className="sidebar-card card">
              <a href="#">
                <h4><span>{mostly}.</span> Lorem Post title</h4>
              </a>
                <p>Description Lorem, ipsum dolor sit..</p>
            </li>
            ))}
          
        </ul>
      </div>
      <div className="tags">
        <h4>Tags</h4>
        <a href="#">Tech</a>
        <a href="#">View</a>
        <a href="#">News</a>
        <a href="#">Portal</a>
        <a href="#">Technologia</a>
        <a href="#">World</a>
        <a href="#">AI</a>
        <a href="#">Lines</a>
        <a href="#">VR & VR</a>
        <a href="#">Iot</a>
        <a href="#">Beacons</a>
        <a href="#">Beacons</a>
        <a href="#">Beacons</a>
      </div>
      <div className="insta">
        <h4>Top 6 seguidores</h4>
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
        <img src="../assets/imgs/perfil.jpg" alt="" />
      </div>
      <div className="aside-marketing">
        <marquee behavior="" direction="">Área de Publicidades</marquee>
      </div>
      <div className="aside-marketing">
        <marquee behavior="" direction="right">Área de Publicidades</marquee>
      </div>
    </aside>
  );
}
