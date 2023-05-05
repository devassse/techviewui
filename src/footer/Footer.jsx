import Copyrights from "./copyrights/Copyrights";
import "./footer.css";

export default function Footer() {
  return (
    <>
    <div className="main-footer">
      <div className="about">
        <p>
          A TechView é um Portal de Tecnologia que procura trazer o que há de
          mais novo nesta área e aborda vários outros temas de interesse geral.
        </p>
        <p>Tudo sobre as trends atuais, passadas e as que irão ainda marcar o futuro no qual já vivemos.</p>
      </div>
      <div className="links">
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
            <a href="#">Categories</a>
          </li>
        </ul>
      </div>
      <div className="partners">
        <p>Conheça os nossos parceiros</p>
        <ul>
          <li>
            <a href="#">Leaks</a>
          </li>
          <li>
            <a href="#">kTech News</a>
          </li>
          <li>
            <a href="#">TecMundo</a>
          </li>
        </ul>
      </div>
      <div className="contacts">
        <p>Sinta-se a vontade para entrar em contacto connosco</p>
        <ul>
          <li>
            <span>email: techview@techview.co.mz</span>
          </li>
          <li>
            <span>+258 844559091</span>
          </li>
          <li>
            <span>+258 822759287</span>
          </li>
          <li>
            <span>+258 868559091</span>
          </li>
        </ul>
      </div>
    </div>
      <Copyrights/>
    </>
  );
}
