import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="main-new">
          <img src="./assets/imgs/news/iphone-15.jpeg" alt="Main New" />
          <div className="main-captions">
            <h3>Apple lança novos iphone 15</h3>
            <p>O mundo dos smartphones está cada vez mais renhido...</p>
            <a href="#">Ler mais...</a>
          </div>
        </div>
        <div className="primary-new">
          <img src="./assets/imgs/news/ai-notes.jpeg" alt="Primary New" />
          <div className="news-captions">
            <h3>AI em peso nas redes sociais</h3>
            <p>Lorem ipsum dolor sit amet consectetur ...</p>
            <a href="#">Ler mais...</a>
          </div>
        </div>
        <div className="secondary-new">
          <img src="./assets/imgs/news/ps5-pro.jpeg" alt="Primary New" />
          <div className="news-captions">
            <h3>A Sony anuncia o console</h3>
            <p>Lorem ipsum dolor sit amet consectetur ...</p>
            <a href="#">Ler mais...</a>
          </div>
        </div>
        <div className="third-new">
          <img src="./assets/imgs/news/game-developer.jpeg" alt="Primary New" />
          <div className="news-captions">
            <h3>Saiba mais acerca deste trabalho</h3>
            <p>Lorem ipsum dolor sit amet consectetur ...</p>
            <a href="#">Ler mais...</a>
          </div>
        </div>
        <div className="fouth-new">
          <img src="./assets/imgs/news/gta6-release.jpeg" alt="Primary New" />
          <div className="news-captions">
            <h3>Finalmente, após 13 anos depois</h3>
            <p>Lorem ipsum dolor sit amet consectetur ...</p>
            <a href="#">Ler mais...</a>
          </div>
        </div>
    </div>
  )
}
