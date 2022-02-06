
import './App.css';
import {Header} from "./components/header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Products, SingleProductPage} from "./pages/products";
import './style/global.scss'
import {ROUTES_CONFIG} from "./routes";
import {ProductsByName} from "./pages/products/list";
function App() {
  return (
      <div className="App">
      <BrowserRouter>

              <Header/>
          <main>

              <Routes>
                  <Route path="/" element={ <Products/>} />
                  {ROUTES_CONFIG.map((item)=>  <Route key={item.name} path={item.name}  element={<SingleProductPage title={item.name} list={ProductsByName[item.name]}/>  } />   )}
              </Routes>
          </main>

          </BrowserRouter>
      </div>

  );
}

export default App;
