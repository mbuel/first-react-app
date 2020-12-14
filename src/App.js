import HelloWord from './Components/HelloWorld.js';
import Header from './Components/header.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div>
      <Header/>
      <HelloWord name="Yistchaq"/>
      <Footer/>
      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
