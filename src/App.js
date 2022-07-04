import logo from './logo.svg';
import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import Home from './pages/Home'
import About from './pages/About';
import './styles.css'

function App() {
  //Simple routing
  let component
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/pricing':
      component = <Pricing />
      break
    case '/about':
      component = <About />
      break
  }
  return (
    <>
      <Navbar />
      <div className='container'>{component}</div>
      
    </>
  )
}

export default App;
