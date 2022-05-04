// import logo from './logo.svg';
import Info from "./component/Info.js"
import About from "./component/About.js"
import Interest from "./component/Interest.js"
import Footer from "./component/Footer.js"

function App() {
  return (
    <div className="card">
        <Info />
        <div className="content">
            <About />
            <Interest />
        </div>
        <Footer />
    </div>
  )
}

export default App;
