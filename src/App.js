import { Navbar, Welcome, Footer, Services } from "./components";

// import { BG } from './assets/background.png'

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        {/* <img src={BG} alt="bg" /> */}
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
