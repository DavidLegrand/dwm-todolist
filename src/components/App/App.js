import TestComponent from "components/TestComponent"
import Form from "components/Form"
import Main from "components/Main"
import { ThemeProvider } from "context/Theme"

function App() {
  return (
    <ThemeProvider>
      <Main>
        <TestComponent />
        <Form />
      </Main>
    </ThemeProvider>
  );
}

export default App;


