// import Main from "components/Main"
// import ThemeSwitcher from "components/ThemeSwitcher"
// import Menu from "components/Menu"
// import Parent from "components/Parent"
// import { ThemeProvider } from "context/Theme"
// import { PageProvider } from "context/Page"
//import Form from "components/Form"

import React from 'react'
import Counter from 'components/Counter';

function App() {

  return (
    <ErrorBoundary>

      <Counter />
    </ErrorBoundary>
  );
}

export default App;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service 
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI    
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}