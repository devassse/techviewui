import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Post from "../blog/post/Post";
import SideBar from "../blog/sidebar/SideBar";
import "./home.css";

export default function Home() {
  const posts = [1,2,3,4,5,6];

  return (
    <div className="home">
      <Header />
      <main className="main-content">
        <div className="home-marketing">
          <marquee behavior="" direction="">
            Área de publicidades
          </marquee>
        </div>
        <section className="blog-content">
          <div className="blog-posts">
            {posts.map((animal) => (
              <Post />
            ))}
          </div>
          <div className="blog-sidebar">
            <SideBar/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
