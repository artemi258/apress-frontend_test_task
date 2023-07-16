import { useEffect, useState } from "react";
import { Container } from "./components/container/Container";
import { Products } from "./pages/products/Products";

import { isMobile } from "./utils/isMobile";

import "./style/style.scss";

function App() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setMobile(isMobile());
    });
    setMobile(isMobile());
  }, []);

  console.log(mobile);
  return (
    <Container>
      <div className="App">
        <Products mobile={mobile} />
      </div>
    </Container>
  );
}

export default App;
