import logo from './logo.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Content from './Components/Content/Content'

function App() {
  return (
    <div className="App" style={{ background: '#0e1b31' }}>
      <Navigation />
      <Banner />
      <Content />
      <Footer />
    </div>
  )
}

export default App
