import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import basketballs from "../pictures/basketballs.jpg";
import tipoff from "../pictures/logan-weaver-lgnwvr-31zFmHWBaDE-unsplash.jpg";

function About() {
  return (
    <main className="about-page">
      <NavBar />
      <section>
        <div>
          <h2 className="about-page-h2">
            I love this game.
            <br />
            Recusandae quos provident.
          </h2>
          <p className="about-page-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img className="about-page-img" src={basketballs} alt="basketballs" />

        <img className="about-page-img" src={tipoff} alt="basketballs" />
        <div>
          <h2 className="about-page-h2">
            Best players in the world.
            <br />
            Battling for the championship.
          </h2>
          <p className="about-page-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nam
            at! Error alias et sit facilis maxime deserunt ratione aut quaerat
            dignissimos, harum totam voluptatibus pariatur repellat optio
            suscipit commodi.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default About;
