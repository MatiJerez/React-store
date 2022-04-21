import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner category="zapatillas"/>
    </div>
  );
}

export default App;
