import Header from './Components/header.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router,
 Switch,
 Route
} from 'react-router-dom';
import About from './Views/About.js'
import Home from './Views/Home.js'
import Contact from './Views/Contact.js'
import Product from './Views/Product.js'



function App() {
  return (
    <div className="relative pb-10 min-h-screen">


      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
           <About />            
          </Route>
          <Route path="/products/:id">
           <Product />            
          </Route>
          <Route path="/contact">
           <Contact />            
          </Route>
        </Switch>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;
