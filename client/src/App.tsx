import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="flex justify-center">
          <NavBar />
        </section>
        <section className="flex justify-center">
          <Product />
        </section>

      </main>
    </>
  );
}

export default App;
