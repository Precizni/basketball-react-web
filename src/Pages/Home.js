import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <main className="homepage">
      <NavBar />
      <section>
        <h1>
          NBA
          <br />
          Where amazing happens.
        </h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          laborum eius fuga, neque nihil non reiciendis? Quae, sapiente adipisci
          autem libero harum quaerat numquam, unde, pariatur rerum iure laborum
          repudiandae.
        </h2>
      </section>
      <Footer />
    </main>
  );
}

export default Home;
