import './App.css';
import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <img src='src\assets\background.png' alt='bg' />
      <Footer />
    </div>
  );
}
// const cursor = document.querySelector('#cursor');

// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', moveCursor)

export default App;
