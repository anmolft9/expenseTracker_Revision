import "./App.css";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Button className="mt-5" variant="primary">
          <i class="fa-solid fa-user"></i>
          Check out
        </Button>
      </Container>
    </div>
  );
}

export default App;
