import { Navbar } from "./layout/header/Navbar";
import ContainerRouter from "./navigation/ContainerRouter";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ContainerRouter />
    </div>
  );
}

export default App;


