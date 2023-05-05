import './post.css'

export default function Post() {
  return (
    <div className="post-card card">
        <img src="../assets/imgs/post-img.jpg" alt="Post Image" />
        <div className="captions">
          <h4>
            <a href="#">Titulo do post</a>
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere, expedita enim asperiores placeat harum architecto vel excepturi eaque. Hic nemo reiciendis modi provident veniam sed vero quo assumenda autem.</p>
          <a href="#">Ler mais ...</a>
        </div>
    </div>
  )
}
