
import './App.css';
import {Header} from "./components/header";
import {BrowserRouter} from "react-router-dom";
import {Products} from "./pages/products";

function App() {
  return (
      <div className="App">
      <BrowserRouter>

              <Header/>
<Products/>
          </BrowserRouter>
      </div>

  );
}

export default App;
