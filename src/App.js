import './App.css';
import Header from './Component/header';
import Footer from './Component/footer';
import Info from "./Component/Info";
import Product from './Component/product'


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Info />
        <Product />
        <Footer />
      </>
    </div>
  );
}

export default App;
