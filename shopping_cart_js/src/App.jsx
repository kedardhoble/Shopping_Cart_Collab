import { Navbar } from "./layout/header/Navbar";
import ContainerRouter from "./navigation/ContainerRouter";
import { useState } from "react";
function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Navbar quantity={quantity} />
      <ContainerRouter quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}

export default App;
