import "./App.css"; 
import PersonalShopper from './components/PersonalShopper';
import Header from './components/Header'
import Marketplace from "./components/Marketplace";
import Emergencykits from "./components/Emergencykits";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main id="californila_main" className="w-full min-h-screen px-5 ml-auto">
        <section className="flex flex-col justify-center gap-4 p-0 w-full">
          <PersonalShopper />
          <div className="flex flex-row flex-wrap">
            <Marketplace />
            <Emergencykits />
          </div>
        </section>
      </main>

      <Footer />
    </div>

  );
}

export default App;
