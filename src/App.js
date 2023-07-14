import { Container } from "./components/Container";
import { Products } from "./pages/products/Products";

import "./style/style.scss";

function App() {
  return (
    <Container>
      <div className="App">
        <Products />
      </div>
    </Container>
  );
}

export default App;
