import Main from "components/Main"
import ThemeSwitcher from "components/ThemeSwitcher"
import Menu from "components/Menu"
import { ThemeProvider } from "context/Theme"
import { PageProvider } from "context/Page"

function App() {
  return (
    <PageProvider>
      <ThemeProvider>
        <Main>
          <ThemeSwitcher />
          <Menu />
        </Main>
      </ThemeProvider>
    </PageProvider>
  );
}

export default App;


